import { useState } from "react";
import Icon from "../utils/iconsUtil";
import Sidenav from "../components/Sidenav";
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

    const [isSidenavOpen, setIsSidenavOpen] = useState(false);

    const toggleSidenav = () => {
        setIsSidenavOpen(!isSidenavOpen);
    };

    return (
        <>
            <div className="min-h-screen bg-gray-100 font-inter flex overflow-hidden">
                {/* Sidebar */}
                {isSidenavOpen && (
                    <div className="w-64 bg-white shadow-xl z-10 transition-all duration-300">
                        <Sidenav toggleSidenav={toggleSidenav} isSidenavOpen={isSidenavOpen} />
                    </div>
                )}

                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Top Header */}
                    <header className="w-full bg-white shadow-2xl sm:p-4 md:p-3 text-black flex items-center ">
                        {
                            !isSidenavOpen && (
                                <button
                                    onClick={toggleSidenav}
                                    className="text-gray-800 mr-4 focus:outline-none p-2 rounded-full hover:bg-gray-200 transition-colors"
                                    aria-label="Open Sidebar"
                                >
                                    <Icon name="Bars" />
                                </button>
                            )
                        }
                        <h1 className="text-2xl font-extrabold text-gray-800">Event Planner</h1>
                    </header>

                    <main className="flex-1 p-6 overflow-y-auto">
                        <div className="p-6 bg-white rounded-lg text-2xl font-semibold shadow-lg text-gray-700 min-h-[calc(100vh-5rem)] flex items-center justify-center">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </>


    )
}

export default Dashboard