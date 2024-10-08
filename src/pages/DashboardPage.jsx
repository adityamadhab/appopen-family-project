// src/pages/DashboardPage.jsx
import DashboardCards from "../components/DashboardCard";

function DashboardPage() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Welcome Back, User</h2>
      {/* Quick Links */}
      <DashboardCards />
      {/* Notifications */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Notifications</h3>
        <ul className="space-y-2">
          <li className="p-2 border rounded">You have new discrepancy alerts to review.</li>
          {/* Add more notifications */}
        </ul>
      </section>
    </div>
  );
}

export default DashboardPage;
