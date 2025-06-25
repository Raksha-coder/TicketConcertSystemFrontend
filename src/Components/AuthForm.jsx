import React from 'react'
import { useState } from 'react';
const AuthForm = ({ onLoginSuccess }) => {
     const [isRegisterMode, setIsRegisterMode] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // userType is now always 'event_planner' for registration, as per your request
    const userType = 'event_planner'; 
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleAuth = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setIsLoading(true);

        // Simulate API call to your backend
        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

            if (isRegisterMode) {
                // Simulate successful registration
                console.log("Simulating Event Planner registration for:", email);
                // In a real scenario, you'd make a fetch() call here
                // const response = await fetch('/api/register', { method: 'POST', body: JSON.stringify({ email, password, role: userType }) });
                // const data = await response.json();
                // if (!response.ok) throw new Error(data.message || 'Registration failed');

                // Simulate success: pass user data to parent App component
                onLoginSuccess({ email, role: userType, uid: `simulated-uid-${Date.now()}` });
                console.log("Simulated Event Planner registered successfully.");

            } else {
                // Simulate successful login
                console.log("Simulating login for:", email);
                // In a real scenario, you'd make a fetch() call here
                // const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) });
                // const data = await response.json();
                // if (!response.ok) throw new Error(data.message || 'Login failed');

                // Simulate success: pass user data to parent App component
                // For login, we assume the role is 'event_planner' as well, or would be fetched from your backend
                onLoginSuccess({ email, role: userType, uid: `simulated-uid-${Date.now()}` }); 
                console.log("Simulated login successful.");
            }
        } catch (error) {
            console.error("Simulated authentication error:", error);
            // Provide a generic error or parse error from your simulated backend response
            setErrorMessage(`Action failed: ${error.message || 'Please try again.'}`);
        } finally {
            setIsLoading(false);
        }
    };


  return (
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
                {isRegisterMode ? 'Register as Event Planner' : 'Login'}
            </h2>
            <form onSubmit={handleAuth} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                        placeholder="your.email@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                        placeholder="********"
                    />
                </div>

                {/* Confirm user type for registration */}
                {isRegisterMode && (
                    <p className="text-gray-700 text-sm font-medium pt-2">
                        You will be registered as an <span className="font-semibold text-purple-700">Event Planner</span>.
                    </p>
                )}

                {errorMessage && (
                    <div className="text-red-600 text-sm bg-red-100 p-3 rounded-lg border border-red-200">
                        {errorMessage}
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold text-lg hover:bg-purple-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    disabled={isLoading}
                >
                    {isLoading ? 'Processing...' : (isRegisterMode ? 'Register' : 'Login')}
                </button>
            </form>

            <p className="text-center text-gray-600 text-sm mt-6">
                {isRegisterMode ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                    onClick={() => {
                        setIsRegisterMode(!isRegisterMode);
                        setErrorMessage(''); // Clear errors when switching mode
                    }}
                    className="text-purple-700 font-semibold hover:underline focus:outline-none"
                >
                    {isRegisterMode ? 'Login here' : 'Register here'}
                </button>
            </p>
        </div>
  )
}

export default AuthForm