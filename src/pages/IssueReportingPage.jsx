import { useState } from 'react';
import { TriangleAlert } from 'lucide-react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import 'sweetalert2/dist/sweetalert2.min.css'; // Optional, for SweetAlert2 styling

function IssueReportingPage() {
    const [issues, setIssues] = useState([
        { id: 1, message: 'Age discrepancy detected between you and your parent.' },
        { id: 2, message: 'Sibling birth dates overlap.' },
    ]);

    const [manualIssue, setManualIssue] = useState('');

    // SweetAlert popup for issue resolution confirmation
    const resolveIssue = (id) => {
        const issue = issues.find((issue) => issue.id === id);
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to resolve the issue: "${issue.message}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, resolve it!',
        }).then((result) => {
            if (result.isConfirmed) {
                // Remove the issue
                setIssues((prevIssues) => prevIssues.filter((issue) => issue.id !== id));
                // Show success popup
                Swal.fire('Resolved!', 'The issue has been resolved.', 'success');
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!manualIssue.trim()) {
            Swal.fire('Error', 'Please describe the issue before submitting.', 'error');
            return;
        }

        // Show SweetAlert confirmation and clear the form
        Swal.fire({
            title: 'Issue Submitted!',
            text: 'Your issue has been reported successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
        });
        setManualIssue(''); // Clear form after submission
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold text-orange-800 mb-8 border-b-2 border-orange-600 pb-2">
                    Issue Reporting
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Discrepancy Alerts */}
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-200">
                        <h2 className="text-2xl font-semibold text-orange-700 mb-4">Discrepancy Alerts</h2>
                        {issues.length === 0 ? (
                            <p className="text-gray-600">No issues detected.</p>
                        ) : (
                            <ul className="space-y-4">
                                {issues.map((issue) => (
                                    <li key={issue.id} className="bg-orange-50 p-4 rounded-lg border border-orange-300">
                                        <div className="flex items-start">
                                            <TriangleAlert className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                                            <div className="flex-1">
                                                <p className="text-gray-800 font-medium">{issue.message}</p>
                                                <button
                                                    onClick={() => resolveIssue(issue.id)}
                                                    className="mt-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
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
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-200">
                        <h2 className="text-2xl font-semibold text-orange-700 mb-4">Report an Issue</h2>
                        <form onSubmit={handleSubmit}>
                            <textarea
                                placeholder="Describe the issue..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all mb-4"
                                rows="5"
                                value={manualIssue}
                                onChange={(e) => setManualIssue(e.target.value)}
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
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
