// src/components/Header.jsx
import { Link } from 'react-router-dom';
import NotificationBell from './NotificationBell';

function Header() {
    return (
        <header className="bg-white shadow">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-2xl font-bold text-blue-600">
                    <Link to="/">Family Tree App</Link>
                </div>
                <ul className="flex space-x-6 items-center">
                    <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
                    <li><Link to="/data-collection" className="hover:text-blue-600 transition-colors">Data Collection</Link></li>
                    <li><Link to="/family-tree" className="hover:text-blue-600 transition-colors">Family Tree</Link></li>
                    <li><Link to="/issues" className="hover:text-blue-600 transition-colors">Issues</Link></li>
                    <li><Link to="/help" className="hover:text-blue-600 transition-colors">Help Center</Link></li>
                    <li><NotificationBell /></li>
                    <li>
                        <div className="flex items-center space-x-2">
                            <img src="/path/to/user-avatar.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
                            <span className="font-medium">John Doe</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
