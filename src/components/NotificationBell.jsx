// src/components/NotificationBell.jsx
import { useState } from 'react';

function NotificationBell() {
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'Age discrepancy detected in your family tree.' },
        { id: 2, message: 'New document uploaded.' },
    ]);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button className="relative" onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {/* Bell Icon */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405C18.523 14.778 18 13.448 18 12V8a6 6 0 10-12 0v4c0 1.448-.523 2.778-1.595 3.595L3 17h5m4 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                        {notifications.length}
                    </span>
                )}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg">
                    <ul>
                        {notifications.map(notification => (
                            <li key={notification.id} className="p-2 hover:bg-gray-100">
                                {notification.message}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default NotificationBell;
