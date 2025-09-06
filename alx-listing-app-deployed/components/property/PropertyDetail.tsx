type Property = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
};

export default function PropertyDetail({ property }: { property: Property }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{property.title}</h1>
      <img src={property.image} alt={property.title} className="w-full h-auto my-4" />
      <p><strong>Price:</strong> ${property.price}</p>
      <p><strong>Location:</strong> {property.location}</p>
      <p className="mt-4">{property.description}</p>
    </div>
  );
}
