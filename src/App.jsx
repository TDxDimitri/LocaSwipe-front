import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { AuthProvider } from './domains/AuthenticatedRoute/contexts/AuthContext';
import AuthenticatedRoute from './domains/AuthenticatedRoute/AuthenticatedRoute';
import LoginPage from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import WelcomePage from './pages/welcome/index';
import Choice from './pages/choice/choice';
import './App.css';
import OwnerHomePage from './pages/owner/owner';
import TenantHomePage from './pages/tenant/tenant';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/choice" element={<Choice />} />

          {/* routes protégées avec AuthenticatedRoute */}
          <Route
            path="/owner"
            element={
              <AuthenticatedRoute allowedRoles={['owner']}>
                <OwnerHomePage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/tenant"
            element={
              <AuthenticatedRoute allowedRoles={['tenant']}>
                <TenantHomePage />
              </AuthenticatedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
