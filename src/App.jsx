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
import OwnerHomePage from './pages/owner/index.jsx';
import { TenantHomePage } from './pages/tenant';
import SignUpForm from './pages/signup/signUpForm.jsx';
import MessagingPage from './pages/Messaging/index.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/choice" element={<Choice />} />
          <Route path="/signup" element={<SignUpForm />} />
          {/* autres routes... */}
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
          {/* routes de messagerie */}
          <Route
            path="/owner/messages"
            element={
              <AuthenticatedRoute allowedRoles={['owner']}>
                <MessagingPage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/tenant/messages"
            element={
              <AuthenticatedRoute allowedRoles={['tenant']}>
                <MessagingPage />
              </AuthenticatedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
