import React from 'react'

const Dashboard = ({ user, onLogout }) => {
      const userEmail = user.email;
    const userRole = user.role;
    const userId = user.uid;


  return (
    <div> <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 text-center transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Welcome!</h2>
            <p className="text-lg text-gray-700 mb-2">You are logged in as:</p>
            <p className="text-xl font-semibold text-indigo-700 mb-4 break-words">
                {userEmail || 'Guest'}
            </p>
            <p className="text-lg text-gray-700 mb-2">Your User ID:</p>
            <p className="text-md font-mono text-gray-600 bg-gray-100 p-2 rounded-lg break-all mb-4">
                {userId}
            </p>
            <p className="text-lg text-gray-700 mb-2">Your Role:</p>
            <p className="text-2xl font-bold text-purple-600 mb-6">
                {userRole ? userRole.toUpperCase() : 'Not Available'}
            </p>
            <button
                onClick={onLogout}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
                Logout
            </button>
        </div></div>
  )
}

export default Dashboard