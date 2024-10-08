import { useState } from 'react';
import { 
    Bell, 
    UserPlus, 
    AlertTriangle, 
    Search, 
    FileText, 
    Users, 
    BarChart2,
    ChevronRight,
    X
} from 'lucide-react';

function DashboardPage() {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'alert',
            message: 'Potential data discrepancy detected in Smith family tree',
            time: '2 hours ago',
            unread: true
        },
        {
            id: 2,
            type: 'update',
            message: 'New family member added: Sarah Johnson',
            time: '5 hours ago',
            unread: true
        },
        {
            id: 3,
            type: 'document',
            message: 'Marriage certificate verification pending',
            time: '1 day ago',
            unread: false
        }
    ]);

    const stats = [
        { label: 'Family Members', value: '48', icon: Users, color: 'blue' },
        { label: 'Documents', value: '124', icon: FileText, color: 'green' },
        { label: 'Pending Tasks', value: '3', icon: AlertTriangle, color: 'yellow' },
        { label: 'Total Trees', value: '2', icon: BarChart2, color: 'purple' }
    ];

    const quickActions = [
        { name: 'Add Family Member', icon: UserPlus, color: 'blue' },
        { name: 'Upload Document', icon: FileText, color: 'green' },
        { name: 'View Reports', icon: BarChart2, color: 'purple' },
        { name: 'Search Records', icon: Search, color: 'gray' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-blue-900">Welcome back, John</h1>
                        <p className="text-gray-600 mt-1">Here's what's happening with your family tree</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                            <Bell className="w-6 h-6 text-gray-600" />
                            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-500 text-sm">{stat.label}</p>
                                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                                    </div>
                                    <div className={`bg-${stat.color}-100 p-3 rounded-full`}>
                                        <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {quickActions.map((action, index) => {
                            const Icon = action.icon;
                            return (
                                <button
                                    key={index}
                                    className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <div className={`bg-${action.color}-100 p-3 rounded-full mb-3`}>
                                        <Icon className={`w-6 h-6 text-${action.color}-600`} />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">{action.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Recent Activity & Notifications */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Recent Activity</h2>
                            <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                <div className="bg-blue-100 p-2 rounded-full mr-4">
                                    <UserPlus className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">New family member added</p>
                                    <p className="text-xs text-gray-500">2 hours ago</p>
                                </div>
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                            </div>
                            <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                <div className="bg-green-100 p-2 rounded-full mr-4">
                                    <FileText className="w-5 h-5 text-green-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">Document uploaded</p>
                                    <p className="text-xs text-gray-500">5 hours ago</p>
                                </div>
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Notifications</h2>
                            <button className="text-sm text-blue-600 hover:text-blue-700">Mark All as Read</button>
                        </div>
                        <div className="space-y-3">
                            {notifications.map((notification) => (
                                <div 
                                    key={notification.id}
                                    className={`flex items-start p-3 rounded-lg ${notification.unread ? 'bg-blue-50' : 'hover:bg-gray-50'} transition-colors`}
                                >
                                    <div className={`p-2 rounded-full mr-3 ${
                                        notification.type === 'alert' ? 'bg-red-100' :
                                        notification.type === 'update' ? 'bg-blue-100' : 'bg-green-100'
                                    }`}>
                                        {notification.type === 'alert' && <AlertTriangle className="w-5 h-5 text-red-600" />}
                                        {notification.type === 'update' && <UserPlus className="w-5 h-5 text-blue-600" />}
                                        {notification.type === 'document' && <FileText className="w-5 h-5 text-green-600" />}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{notification.message}</p>
                                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                    </div>
                                    <button className="p-1 hover:bg-gray-200 rounded-full">
                                        <X className="w-4 h-4 text-gray-400" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;