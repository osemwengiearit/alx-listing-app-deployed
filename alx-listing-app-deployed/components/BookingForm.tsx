import React, { useState } from 'react';

interface BookingFormProps {
  propertyId: number;
}

export default function BookingForm({ propertyId }: BookingFormProps) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, date, propertyId }),
      });

      if (!res.ok) throw new Error('Booking failed');
      setSuccess(true);
      setName('');
      setDate('');
    } catch (error) {
      alert('Error submitting booking');
    }
  };

  return (
    <div className="mt-8 border-t pt-4">
      <h2 className="text-xl font-bold mb-2">Book this property</h2>
      {success && <p className="text-green-600 mb-2">Booking successful!</p>}
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="block border rounded px-3 py-2 w-full"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="block border rounded px-3 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
