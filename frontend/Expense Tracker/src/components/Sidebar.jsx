// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';
import images from '../assets/images';
import { FaHome, FaWallet, FaChartBar, FaUser, FaMoneyBill } from 'react-icons/fa'; // Example icons

const Sidebar = () => {
    return (
        <div className="flex flex-col w-1/6 h-screen bg-gray-800 text-white items-center justify-between p-4">
            <div className='w-full space-y-10'>
                <div className='flex flex-col justify-center items-center'>

                    <img
                        src={images.profile}
                        alt="Profile"
                        className="w-25 rounded-full"
                    />
                    <h2 className="text-lg font-semibold">User Name</h2>
                </div>


                <nav className="flex flex-col justify-start items-start  w-full">
                    <Link to="/" className="flex items-center space-x-2 w-full transition-all py-3 px-3 hover:text-gray-400 rounded  hover:bg-gray-900">
                        <FaHome />
                        <span>Dashboard</span>
                    </Link>
                    <Link to="/income" className="flex items-center space-x-2 w-full transition-all py-3 px-3 hover:text-gray-400  rounded hover:bg-gray-900">
                        <FaWallet />
                        <span>Income</span>
                    </Link>
                    <Link to="/expenses" className="flex items-center space-x-2 w-full transition-all py-3 px-3 hover:text-gray-400  rounded hover:bg-gray-900">
                        <FaMoneyBill />
                        <span>Expenses</span>
                    </Link>
                    <Link to="/analytics" className="flex items-center space-x-2 w-full transition-all py-3 px-3 hover:text-gray-400  rounded hover:bg-gray-900">
                        <FaChartBar />
                        <span>Analytics</span>
                    </Link>
                    <Link to="/profile" className="flex items-center space-x-2 w-full transition-all py-3 px-3 hover:text-gray-400  rounded hover:bg-gray-900">
                        <FaUser />
                        <span>Profile</span>
                    </Link>
                </nav>
            </div>
            <Link to="/login" className='flex justify-center'>
                <button className='button '>Log out</button>
            </Link>

        </div>
    );
};

export default Sidebar;
