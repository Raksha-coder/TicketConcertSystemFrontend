
import React, { useState, useEffect, createContext, useContext } from 'react';
import AuthForm from './AuthForm';

// Contexts (no longer needed for Firebase, but kept for potential future state management if passed down)
const AppContext = createContext(null);
const Loading = () => {

 const [user, setUser] = useState(null); // Stores logged-in user data { email, role, uid }
    const [loadingApp, setLoadingApp] = useState(true); // Simulates initial app loading

    useEffect(() => {
        // Simulate app loading/initialization
        const timer = setTimeout(() => {
            setLoadingApp(false);
            // In a real app, you might check for a session token here
        }, 1000); // Simulate 1 second loading time

        return () => clearTimeout(timer);
    }, []);

    // Function to be called by AuthForm upon successful (simulated) login/registration
    const handleLoginSuccess = (userData) => {
        setUser(userData);
    };

    // Function to handle logout from Dashboard
    const handleLogout = () => {
        setUser(null);
    };

    if (loadingApp) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-800 text-white">
                <p className="text-2xl font-semibold">Loading application...</p>
            </div>
        );
    }

  return (
    <AppContext.Provider value={{ handleLoginSuccess, handleLogout }}>
            {/* Added background image, cover, no-repeat, fixed for responsiveness */}
            <div 
                className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 md:p-8"
                style={{
                    backgroundImage: `url('https://placehold.co/1920x1080/6A1B9A/FFFFFF?text=Festive+Event+Background')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed', // Keeps background fixed during scroll if content overflows
                }}
            >
                {/* Overlay to darken image and make text readable */}
                <div className="absolute inset-0 bg-black opacity-50"></div> 
                
                {user ? (
                    <Dashboard user={user} onLogout={handleLogout} />
                ) : (
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl space-y-8 lg:space-y-0 lg:space-x-8">
                        {/* Left Section: Heading, Text, and Image */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left text-white space-y-6">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                                Your Ultimate <br className="hidden md:inline"/> Event Management Hub
                            </h1>
                            <p className="text-lg sm:text-xl max-w-prose">
                                Seamlessly plan, promote, and manage events of all sizes. From venue selection to ticket sales,
                                we've got you covered. Join us to make your next event a resounding success!
                            </p>
                            <img
                                src="https://placehold.co/600x400/8A2BE2/FFFFFF?text=Event+Planning"
                                alt="Event Planning Illustration"
                                className="mt-8 rounded-xl shadow-lg w-full max-w-sm md:max-w-md lg:max-w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/8A2BE2/FFFFFF?text=Image+Unavailable"; }}
                            />
                        </div>
                        {/* Right Section: Auth Form */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <AuthForm onLoginSuccess={handleLoginSuccess} />
                        </div>
                    </div>
                )}
            </div>
        </AppContext.Provider>
  )
}

export default Loading