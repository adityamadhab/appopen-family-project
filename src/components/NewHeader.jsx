import { Link } from 'react-router-dom';
import React from 'react'

export default function NewHeader() {
    return (
        <div>
            {/* Header Section */}
            <header className="bg-blue-900 py-2">
                <div className="container mx-auto px-4">
                    <h1 className="text-white text-3xl font-bold">National Family Records Portal</h1>
                </div>
            </header>

            {/* Navigation Bar */}
            <nav className="bg-gray-200 py-2 border-b border-gray-300">
                <div className="container mx-auto px-4">
                    <ul className="flex space-x-4 text-sm">
                        <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
                        <li><Link to="/data-collection" className="hover:text-blue-600 transition-colors">Data Collection</Link></li>
                        <li><Link to="/family-tree" className="hover:text-blue-600 transition-colors">Family Tree</Link></li>
                        <li><Link to="/issues" className="hover:text-blue-600 transition-colors">Issues</Link></li>
                        <li><Link to="/help" className="hover:text-blue-600 transition-colors">Help Center</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
