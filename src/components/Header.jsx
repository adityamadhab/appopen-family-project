// src/components/Header.jsx
import { Link } from 'react-router-dom';
import NotificationBell from './NotificationBell';

function Header() {
    return (
        <header className="bg-white shadow">
            <nav className="container mx-auto flex justify-between items-center py-4">
                <div className="text-2xl font-bold">
                    <Link to="/">Family Tree App</Link>
                </div>
                <ul className="flex space-x-6 items-center">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/data-collection">Data Collection</Link></li>
                    <li><Link to="/family-tree">Family Tree</Link></li>
                    <li><Link to="/issues">Issues</Link></li>
                    <li><Link to="/help">Help Center</Link></li>
                    <li><NotificationBell /></li>
                    <li>
                        <Link to="/login" className="btn">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
