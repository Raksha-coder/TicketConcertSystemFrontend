import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createEvent } from '../api/eventApi';
import { notifyError, notifySuccess } from '../utils/toastUtil';


const VenueAddEvents = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const startDateTimeString = `${date}T${startTime}:00`;
    const endDateTimeString = `${date}T${endTime}:00`;
    const fullStartDate = new Date(startDateTimeString);
    const fullEndDate = new Date(endDateTimeString);

    if (fullStartDate.toString() === 'Invalid Date' || fullEndDate.toString() === 'Invalid Date') {
      setMessage("Please enter valid date and time.");
      setLoading(false);
      return;
    }

    if (fullEndDate <= fullStartDate) {
      setMessage("End time must be after start time.");
      setLoading(false);
      return;
    }

    const eventData = {
      name,
      date: new Date(date).toISOString(),
      startTime: fullStartDate.toISOString(),
      endTime: fullEndDate.toISOString(),
      description,
      venueId: id,
    };

    try {
      const result = await createEvent(eventData);
      if (result.success) {
        notifySuccess("Event Createdsuccessfully!");
        navigate(`/dashboard/venues`);
      } else {
        notifyError("Error while creating Event");
      }

      setName('');
      setDate('');
      setStartTime('');
      setEndTime('');
      setDescription('');
    } catch (error) {
      setMessage('An error occurred during submission. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg mx-auto my-10 font-inter">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Event Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Event Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="e.g., Annual Tech Conference"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date Picker Input */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          {/* Start Time Picker Input */}
          <div>
            <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
              Start Time
            </label>
            <input
              type="time"
              id="startTime"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>
          {/* End Time Picker Input */}
          <div>
            <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
              End Time
            </label>
            <input
              type="time"
              id="endTime"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Description Textarea */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            rows={5}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="e.g., A comprehensive conference on the latest advancements in AI and machine learning."
          ></textarea>
        </div>

        {/* Submit Button with Loading Spinner */}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          disabled={loading} // Disable button when loading
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            'Add Event'
          )}
        </button>
      </form>

      {/* Message Display Area */}
      {message && (
        <div
          className={`mt-6 p-3 rounded-md text-center ${message.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default VenueAddEvents;
