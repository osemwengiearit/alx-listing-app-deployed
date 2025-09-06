import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PropertyCard from '../components/PropertyCard';


export default function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch('http://localhost:3001/properties');
        if (!res.ok) {
          throw new Error('Failed to fetch properties');
        }

        const data = await res.json();
        setProperties(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Available Properties</h1>

      {loading && <p>Loading properties...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property: any) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </Layout>
  );
}
