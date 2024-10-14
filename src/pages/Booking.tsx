import React, { useState } from 'react';
import { format, addDays, startOfWeek } from 'date-fns';

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [serviceType, setServiceType] = useState<'residential' | 'commercial'>('residential');

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour < 18; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    return slots;
  };

  const generateWeekDates = () => {
    const today = new Date();
    const weekStart = startOfWeek(today, { weekStartsOn: 1 });
    return Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', { selectedDate, selectedTime, serviceType });
    alert('Booking submitted successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Book a Cleaning</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Service Type</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="residential"
                checked={serviceType === 'residential'}
                onChange={() => setServiceType('residential')}
                className="form-radio"
              />
              <span className="ml-2">Residential</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="commercial"
                checked={serviceType === 'commercial'}
                onChange={() => setServiceType('commercial')}
                className="form-radio"
              />
              <span className="ml-2">Commercial</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Select Date</label>
          <div className="grid grid-cols-7 gap-2">
            {generateWeekDates().map((date) => (
              <button
                key={date.toISOString()}
                type="button"
                onClick={() => setSelectedDate(date)}
                className={`p-2 text-center rounded ${
                  selectedDate && format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100'
                }`}
              >
                {format(date, 'EEE')}<br />
                {format(date, 'd')}
              </button>
            ))}
          </div>
        </div>
        {selectedDate && (
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Select Time</label>
            <div className="grid grid-cols-4 gap-2">
              {generateTimeSlots().map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 text-center rounded ${
                    selectedTime === time ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          disabled={!selectedDate || !selectedTime}
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;