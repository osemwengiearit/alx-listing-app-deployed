import React from 'react';

export default function PropertyCard({ property }: { property: any }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h2 className="text-xl font-semibold">{property.title}</h2>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-green-600 font-bold">₦{property.price.toLocaleString()}</p>
    </div>
  );
}
