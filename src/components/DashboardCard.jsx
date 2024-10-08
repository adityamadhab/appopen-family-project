// src/components/DashboardCards.jsx
import { Link } from 'react-router-dom';

function DashboardCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Link to="/data-collection" className="dashboard-card text-center">
                Update Data
            </Link>
            <Link to="/family-tree" className="dashboard-card text-center">
                View Family Tree
            </Link>
            <Link to="/issues" className="dashboard-card text-center">
                View Issues
            </Link>
        </div>
    );
}

export default DashboardCards;
