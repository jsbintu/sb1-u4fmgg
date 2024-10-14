import React, { useState } from 'react';

const AdminPortal: React.FC = () => {
  const [bookings, setBookings] = useState([
    { id: 1, date: '2024-03-15', time: '10:00', type: 'Residential', status: 'Confirmed' },
    { id: 2, date: '2024-03-16', time: '14:00', type: 'Commercial', status: 'Pending' },
    { id: 3, date: '2024-03-17', time: '09:00', type: 'Residential', status: 'Completed' },
  ]);

  const handleStatusChange = (id: number, newStatus: string) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status: newStatus } : booking
    ));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Portal</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Manage Bookings</h2>
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
                  <select 
                    value={booking.status}
                    onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                    className="border rounded p-1"
                  >
                    <option value="Confirmed">Confirm</option>
                    <option value="Completed">Complete</option>
                    <option value="Cancelled">Cancel</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPortal;