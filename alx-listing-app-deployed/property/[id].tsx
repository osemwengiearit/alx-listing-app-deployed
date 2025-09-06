import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Optional: track errors

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return; // wait until the router has the id

      try {
        const response = await axios.get(`http://localhost:3001/properties/${id}`);
        setProperty(response.data);
      } catch (err) {
        setError("Error fetching property details.");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!property) return <p>Property not found.</p>;

  return <PropertyDetail property={property} />;
}
