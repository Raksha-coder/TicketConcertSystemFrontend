import React from 'react'

const LeftSectionOfLanding = () => {
    return (

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                Your Ultimate <br className="hidden md:inline" /> Event Management Hub
            </h1>
            <p className="text-lg sm:text-xl max-w-prose">
                Seamlessly plan, promote, and manage events of all sizes. From venue selection to ticket sales,
                we've got you covered. Join us to make your next event a resounding success!
            </p>
            <img
                src="https://placehold.co/600x400/8A2BE2/FFFFFF?text=Event+Planning"
                alt="Event Planning Illustration"
                className="mt-8 rounded-xl shadow-lg w-full max-w-sm md:max-w-md lg:max-w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Image+Unavailable"; }}
            />
        </div>

    )
}

export default LeftSectionOfLanding