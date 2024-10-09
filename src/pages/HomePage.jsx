import { Link } from 'react-router-dom';
import { TreePine, Upload, AlertCircle } from 'lucide-react';

function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Family History Documentation Portal
                    </h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                        The official platform to document, explore, and preserve family records for future generations.
                    </p>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
                </section>

                {/* CTA Section */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16">
                    <Link
                        to="/register"
                        className="flex items-center justify-center px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all"
                    >
                        Register
                    </Link>
                    <Link
                        to="/login"
                        className="flex items-center justify-center px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                    >
                        Sign In
                    </Link>
                </div>

                {/* Feature Cards */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                            <TreePine className="w-6 h-6 text-blue-700" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            Create a Family Tree
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Easily build a family tree by adding family members, records, and historical events.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                            <Upload className="w-6 h-6 text-green-700" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            Document Storage
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Securely upload and manage important family documents, photos, and certificates.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                            <AlertCircle className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            Verification Services
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Verify and authenticate family records with our government-backed verification system.
                        </p>
                    </div>
                </section>

                {/* Statistics Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                        <div className="text-3xl font-bold text-blue-700 mb-2">10,000+</div>
                        <div className="text-gray-600">Family Trees Created</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                        <div className="text-3xl font-bold text-green-700 mb-2">50,000+</div>
                        <div className="text-gray-600">Documents Stored</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                        <div className="text-3xl font-bold text-purple-700 mb-2">25,000+</div>
                        <div className="text-gray-600">Verified Records</div>
                    </div>
                </section>

                {/* Trust Banner */}
                <section className="text-center bg-white rounded-lg p-8 border border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Official Government Partner
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join thousands of families using our government-approved platform to preserve their family history for future generations.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default HomePage;
