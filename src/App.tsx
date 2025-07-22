import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';
import { Research } from './pages/Research';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Disclaimer } from './pages/Disclaimer';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminBlogs } from './pages/admin/AdminBlogs';
import { AdminJobs } from './pages/admin/AdminJobs';
import { CreateBlog } from './pages/admin/CreateBlog';
import { EditBlog } from './pages/admin/EditBlog';
import { CreateJob } from './pages/admin/CreateJob';
import { EditJob } from './pages/admin/EditJob';
import { ProtectedRoute } from './components/ProtectedRoute';

// Component to handle scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/research" element={<Research />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/blogs" element={
              <ProtectedRoute>
                <AdminBlogs />
              </ProtectedRoute>
            } />
            <Route path="/admin/blogs/create" element={
              <ProtectedRoute>
                <CreateBlog />
              </ProtectedRoute>
            } />
            <Route path="/admin/blogs/edit/:id" element={
              <ProtectedRoute>
                <EditBlog />
              </ProtectedRoute>
            } />
            <Route path="/admin/jobs" element={
              <ProtectedRoute>
                <AdminJobs />
              </ProtectedRoute>
            } />
            <Route path="/admin/jobs/create" element={
              <ProtectedRoute>
                <CreateJob />
              </ProtectedRoute>
            } />
            <Route path="/admin/jobs/edit/:id" element={
              <ProtectedRoute>
                <EditJob />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;