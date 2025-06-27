import { Link } from "react-router-dom";
import Icon from "../utils/iconsUtil";

const Sidenav = ({ toggleSidenav, isSidenavOpen }) => {
    return (
        <>
            <aside
                className={`fixed top-0 left-0 w-64 h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white transform transition-transform duration-300 ease-in-out ${isSidenavOpen ? 'translate-x-0' : '-translate-x-full'
                    } z-50 rounded-r-lg shadow-xl`}
            >
                <div className="p-6">
                    {/* Sidenav Header with Close Button for small screens */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold">Dashboard</h2>
                        <button
                            onClick={toggleSidenav}
                            className="text-white  focus:outline-none p-2 rounded-full hover:bg-gray-700 transition-colors"
                            aria-label="Close Sidebar"
                        >
                            <Icon name="Close" />
                        </button>
                    </div>
                    {/* Navigation links */}
                    <nav>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/dashboard/venues"    className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow-md">
                                        <Icon name="Home" className="mr-4 text-xl" />
                                        Venue
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow-md"
                                >


                                    <Icon name="User" className="mr-4 text-xl" />
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow-md"
                                >

                                    <Icon name="Settings" className="mr-4 text-xl" />
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default Sidenav