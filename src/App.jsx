// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DataCollectionPage from './pages/DataCollectionPage';
import FamilyTreePage from './pages/FamilyTreePage';
import IssueReportingPage from './pages/IssueReportingPage';
import HelpCenterPage from './pages/HelpCenterPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/data-collection" element={<DataCollectionPage />} />
          <Route path="/family-tree" element={<FamilyTreePage />} />
          <Route path="/issues" element={<IssueReportingPage />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
