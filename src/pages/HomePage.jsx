import { Link } from 'react-router-dom';
import { TreePine, Upload, AlertCircle, ChevronRight } from 'lucide-react';

function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-blue-900 mb-4 animate-fade-in">
                        Discover Your Family Story
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Build, explore, and preserve your family history with our intuitive family tree application.
                    </p>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </section>

                {/* CTA Section */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16">
                    <Link 
                        to="/register" 
                        className="group flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                    >
                        Get Started Free
                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                        to="/login" 
                        className="flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Sign In
                    </Link>
                </div>

                {/* Feature Cards */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                            <TreePine className="w-7 h-7 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">
                            Create Your Family Tree
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Build your family tree with our intuitive tools. Add relatives, photos, and stories to bring your family history to life.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                            <Upload className="w-7 h-7 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">
                            Document Repository
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Securely store and organize important family documents, certificates, and photos in one place.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                            <AlertCircle className="w-7 h-7 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">
                            Smart Verification
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Maintain accuracy with advanced error detection that identifies potential inconsistencies in your family data.
                        </p>
                    </div>
                </section>

                {/* Statistics Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                        <div className="text-gray-600">Family Trees Created</div>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-lg">
                        <div className="text-4xl font-bold text-green-600 mb-2">50,000+</div>
                        <div className="text-gray-600">Documents Stored</div>
                    </div>
                    <div className="text-center p-6 bg-purple-50 rounded-lg">
                        <div className="text-4xl font-bold text-purple-600 mb-2">25,000+</div>
                        <div className="text-gray-600">Happy Users</div>
                    </div>
                </section>

                {/* Trust Banner */}
                <section className="text-center bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl p-8 border border-blue-100">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Trusted by Genealogists Worldwide
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join thousands of families who use our platform to preserve their legacy and connect with their roots.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default HomePage;