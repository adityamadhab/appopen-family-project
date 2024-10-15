import { Link } from 'react-router-dom';
import { TreePine, Upload, AlertCircle } from 'lucide-react';

function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                
                {/* Hero Section */}
                <section className="text-center mb-8 border-b-2 pb-8 border-gray-300 flex">
                    <img
                        src="/Narendra-Modi-the-Leaders-Page-removebg-preview.png"
                        alt="Narendra Modi"
                        width={"350px"}
                        height={"150px"}
                        className="mr-5"
                    />
                    <div className="flex flex-col grow justify-center">
                        <h1 className="text-3xl font-bold text-orange-600 mb-4">
                            Family History Documentation Portal
                        </h1>
                        <p className="text-gray-700 text-md mb-6">
                            Official platform to document, explore, and preserve family records.
                        </p>
                        <div className="w-20 h-1 bg-orange-600 mx-auto mb-4"></div>
                        <div className="flex justify-center space-x-4">
                            <Link
                                to="/register"
                                className="bg-orange-600 text-white px-6 py-2 font-semibold rounded-md hover:bg-orange-700 transition-colors"
                            >
                                Register
                            </Link>
                            <Link
                                to="/login"
                                className="bg-white text-orange-600 border border-orange-600 px-6 py-2 font-semibold rounded-md hover:bg-gray-100 transition-colors"
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white">
                            <div className="w-12 h-12 bg-orange-100 text-orange-600 mx-auto flex items-center justify-center rounded-full mb-4">
                                <TreePine className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Create a Family Tree</h3>
                            <p className="text-gray-600 text-sm">
                                Add family members, records, and historical events to build your family tree.
                            </p>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white">
                            <div className="w-12 h-12 bg-green-100 text-green-600 mx-auto flex items-center justify-center rounded-full mb-4">
                                <Upload className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Document Storage</h3>
                            <p className="text-gray-600 text-sm">
                                Securely upload and store important family documents.
                            </p>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white">
                            <div className="w-12 h-12 bg-red-100 text-red-600 mx-auto flex items-center justify-center rounded-full mb-4">
                                <AlertCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Verification Services</h3>
                            <p className="text-gray-600 text-sm">
                                Verify and authenticate family records with our verification system.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Action Links Section */}
                <section className="py-8 bg-orange-100 rounded-lg shadow-sm">
                    <div className="flex justify-center space-x-6">
                        <Link to="/eligibility" className="bg-white text-orange-600 px-6 py-2 font-semibold border border-orange-600 rounded-md hover:bg-gray-100 transition">
                            Check Details
                        </Link>
                        <Link to="/family-tree" className="bg-white text-orange-600 px-6 py-2 font-semibold border border-orange-600 rounded-md hover:bg-gray-100 transition">
                            View Family tree
                        </Link>
                        <Link to="/verify" className="bg-white text-orange-600 px-6 py-2 font-semibold border border-orange-600 rounded-md hover:bg-gray-100 transition">
                            Verify Records
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default HomePage;
