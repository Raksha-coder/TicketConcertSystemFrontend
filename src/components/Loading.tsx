
import { useState, useEffect } from 'react';
import AuthForm from './AuthForm';
import LeftSectionOfLanding from './LeftSectionOfLanding';
const Loading = () => {
    const [loadingApp, setLoadingApp] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingApp(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);


    if (loadingApp) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-800 text-white">
                <p className="text-2xl font-semibold">Loading application...</p>
            </div>
        );
    }

    return (
        <>
            {/* Background image */}
            <div
                className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 md:p-8"
                style={{
                    backgroundImage: `url('https://placehold.co/1920x1080/6A1B9A/FFFFFF?text=Festive+Event+Background')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }}
            >
                {/* Overlay to darken image and make text readable */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl space-y-8 lg:space-y-0 lg:space-x-8">
                    <LeftSectionOfLanding />
                    {/* Right Section: Auth Form */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <AuthForm />
                    </div>
                </div>

            </div>

        </>

    )
}

export default Loading