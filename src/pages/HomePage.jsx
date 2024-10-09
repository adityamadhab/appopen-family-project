import { Link } from 'react-router-dom';
import { TreePine, Upload, AlertCircle } from 'lucide-react';

function HomePage() {
    return (
        <div className="min-h-screen bg-white mt-4 max-w-7xl mx-auto">

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <section className="text-center mb-8 border-b-2 pb-8 border-gray-300">
                    <h1 className="text-2xl font-bold text-blue-900 mb-4">
                        Family History Documentation Portal
                    </h1>
                    <p className="text-gray-700 text-md mb-6">
                        Official platform to document, explore, and preserve family records.
                    </p>
                    <div className="w-16 h-1 bg-blue-700 mx-auto mb-4"></div>
                </section>

                {/* Action Buttons */}
                <div className="text-center mb-8">
                    <Link to="/register" className="bg-blue-700 text-white px-6 py-2 inline-block font-semibold border border-gray-300 hover:bg-blue-800">
                        Register
                    </Link>
                    <Link to="/login" className="ml-4 bg-white text-blue-900 px-6 py-2 inline-block font-semibold border border-gray-300 hover:bg-gray-200">
                        Sign In
                    </Link>
                </div>

                {/* Features Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="border border-gray-300 p-4 bg-white">
                        <div className="w-10 h-10 bg-blue-100 text-blue-900 mb-4 p-2 mx-auto flex items-center justify-center">
                            <TreePine className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Create a Family Tree</h3>
                        <p className="text-gray-700 text-sm">
                            Add family members, records, and historical events to build your family tree.
                        </p>
                    </div>

                    <div className="border border-gray-300 p-4 bg-white">
                        <div className="w-10 h-10 bg-green-100 text-green-900 mb-4 p-2 mx-auto flex items-center justify-center">
                            <Upload className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Document Storage</h3>
                        <p className="text-gray-700 text-sm">
                            Securely upload and store important family documents.
                        </p>
                    </div>

                    <div className="border border-gray-300 p-4 bg-white">
                        <div className="w-10 h-10 bg-red-100 text-red-900 mb-4 p-2 mx-auto flex items-center justify-center">
                            <AlertCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Verification Services</h3>
                        <p className="text-gray-700 text-sm">
                            Verify and authenticate family records with our verification system.
                        </p>
                    </div>
                </section>

                {/* Statistics Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center bg-gray-100 p-4 border border-gray-300">
                        <div className="text-blue-900 text-2xl font-bold">10,000+</div>
                        <p className="text-gray-700 text-sm">Family Trees Created</p>
                    </div>
                    <div className="text-center bg-gray-100 p-4 border border-gray-300">
                        <div className="text-green-900 text-2xl font-bold">50,000+</div>
                        <p className="text-gray-700 text-sm">Documents Stored</p>
                    </div>
                    <div className="text-center bg-gray-100 p-4 border border-gray-300">
                        <div className="text-red-900 text-2xl font-bold">25,000+</div>
                        <p className="text-gray-700 text-sm">Verified Records</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default HomePage;
