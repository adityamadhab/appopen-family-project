// src/pages/IssueReportingPage.jsx
import { useState } from 'react';

function IssueReportingPage() {
    const [issues, setIssues] = useState([
        { id: 1, message: 'Age discrepancy detected between you and your parent.' },
        { id: 2, message: 'Sibling birth dates overlap.' },
    ]);

    const resolveIssue = (id) => {
        // Implement issue resolution logic
        setIssues(prevIssues => prevIssues.filter(issue => issue.id !== id));
    };

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Discrepancy Alerts</h2>
            {issues.length === 0 ? (
                <p>No issues detected.</p>
            ) : (
                <ul className="space-y-4">
                    {issues.map(issue => (
                        <li key={issue.id} className="p-4 border rounded">
                            <p>{issue.message}</p>
                            <button onClick={() => resolveIssue(issue.id)} className="btn mt-2">Resolve</button>
                        </li>
                    ))}
                </ul>
            )}
            {/* Manual Reporting */}
            <section className="mt-8">
                <h3 className="text-xl font-semibold mb-2">Report an Issue</h3>
                <form>
                    <textarea placeholder="Describe the issue..." className="input mb-4" rows="5"></textarea>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </section>
        </div>
    );
}

export default IssueReportingPage;
