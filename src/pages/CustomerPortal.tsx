import React, { useState } from 'react';

const CustomerPortal: React.FC = () => {
  const [bookings, setBookings] = useState([
    { id: 1, date: '2024-03-15', time: '10:00', type: 'Residential', status: 'Confirmed' },
    { id: 2, date: '2024-03-20', time: '14:00', type: 'Residential', status: 'Pending' },
  ]);

  const handleCancelBooking = (id: number) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status: 'Cancelled' } : booking
    ));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Customer Portal</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Bookings</h2>
        {bookings.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Time</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(booking => (
                <tr key={booking.id} className="border-b">
                  <td className="p-2">{booking.date}</td>
                  <td className="p-2">{booking.time}</td>
                  <td className="p-2">{booking.type}</td>
                  <td className="p-2">{booking.status}</td>
                  <td className="p-2">
                    {booking.status !== 'Cancelled' && (
                      <button
                        onClick={() => handleCancelBooking(booking.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>You have no bookings at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerPortal;