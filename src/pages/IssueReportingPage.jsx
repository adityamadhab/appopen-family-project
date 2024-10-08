// src/pages/IssueReportingPage.jsx
import { useState } from 'react';
import { TriangleAlert } from 'lucide-react';

function IssueReportingPage() {
    const [issues, setIssues] = useState([
        { id: 1, message: 'Age discrepancy detected between you and your parent.' },
        { id: 2, message: 'Sibling birth dates overlap.' },
    ]);

    const resolveIssue = (id) => {
        // Implement issue resolution logic
        setIssues(prevIssues => prevIssues.filter(issue => issue.id !== id));
        // Show a success message
        alert('Issue resolved successfully!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold text-blue-900 mb-8">Issue Reporting</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Discrepancy Alerts */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Discrepancy Alerts</h2>
                        {issues.length === 0 ? (
                            <p className="text-gray-600">No issues detected.</p>
                        ) : (
                            <ul className="space-y-4">
                                {issues.map(issue => (
                                    <li key={issue.id} className="bg-red-50 p-4 rounded-lg">
                                        <div className="flex items-start">
                                            <triangle-alert className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                                            <div>
                                                <p className="text-gray-800 font-medium">{issue.message}</p>
                                                <button 
                                                    onClick={() => resolveIssue(issue.id)} 
                                                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                                                >
                                                    Resolve
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
    
                    {/* Manual Reporting */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Report an Issue</h2>
                        <form onSubmit={handleSubmit}>
                            <textarea 
                                placeholder="Describe the issue..." 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all mb-4" 
                                rows="5"
                                value={manualIssue}
                                onChange={(e) => setManualIssue(e.target.value)}
                            ></textarea>
                            <button 
                                type="submit" 
                                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IssueReportingPage;
