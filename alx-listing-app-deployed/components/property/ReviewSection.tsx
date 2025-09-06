import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: number;
  comment: string;
  rating?: number;
  user?: string;
}

interface Props {
  propertyId: number;
}

const ReviewSection = ({ propertyId }: Props) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/reviews?propertyId=${propertyId}`
        );
        setReviews(response.data);
      } catch (err) {
        setError("Failed to load reviews.");
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div className="space-y-4 mt-4">
      <h3 className="text-lg font-semibold">Reviews</h3>
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border p-3 rounded-md shadow-sm bg-white"
        >
          <p className="text-sm text-gray-700 italic">"{review.comment}"</p>
          {review.rating && (
            <p className="text-yellow-600 text-sm">Rating: {review.rating}/5</p>
          )}
          {review.user && (
            <p className="text-sm text-gray-500">- {review.user}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
