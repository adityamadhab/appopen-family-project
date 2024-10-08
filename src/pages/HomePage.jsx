// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="container mx-auto py-16">
            {/* Introduction Section */}
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold">Welcome to the Family Tree App</h1>
                <p className="mt-4 text-gray-600">Build and explore your family history.</p>
            </section>
            {/* Registration/Login */}
            <div className="flex justify-center space-x-4 mb-12">
                <Link to="/login" className="btn">Login</Link>
                <Link to="/register" className="btn">Sign Up</Link>
            </div>
            {/* Feature Highlights */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="feature-card">
                    <h3 className="text-xl font-semibold">Create Your Family Tree</h3>
                    <p className="mt-2 text-gray-600">Visualize your family connections.</p>
                </div>
                <div className="feature-card">
                    <h3 className="text-xl font-semibold">Submit Documents</h3>
                    <p className="mt-2 text-gray-600">Upload vital records securely.</p>
                </div>
                <div className="feature-card">
                    <h3 className="text-xl font-semibold">Error Alerts</h3>
                    <p className="mt-2 text-gray-600">Get notified of data discrepancies.</p>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
