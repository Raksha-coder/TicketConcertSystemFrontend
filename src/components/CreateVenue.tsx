import { useState } from 'react';
import { createVenue } from '../api/venueApi';
import { notifyError, notifySuccess } from '../utils/toastUtil';
import { useNavigate } from 'react-router-dom';
const CreateVenue = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
    const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true); 
    setMessage(''); 

    const venueData = {
      name,
      location,
      capacity: parseInt(capacity, 10), 
    };


    try {
      const result = await createVenue(venueData); 
      if(result.success){
        notifySuccess("Venue created successfully!");
        navigate(`/dashboard/venues`);
      }else{
        notifyError("Error while creating venue");
      }

      setName('');
      setLocation('');
      setCapacity('');

    } catch (error) {
      setMessage('An error occurred during submission. Please try again.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div >
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create New Venue</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Venue Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g., Grand Exhibition Hall"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              placeholder="e.g., 123 Main St, City"
            />
          </div>

          <div>
            <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-1">
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              required
              min="1" 
              placeholder="e.g., 500"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            disabled={loading} 
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Add Venue'
            )}
          </button>
        </form>

        {message && (
          <div
            className={`mt-6 p-3 rounded-md text-center ${
              message.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateVenue;
