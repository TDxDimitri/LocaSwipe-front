import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { AuthProvider } from './domains/AuthenticatedRoute/contexts/AuthContext';
import { SocketProvider } from './config/context/SocketContext.tsx';
import AuthenticatedRoute from './domains/AuthenticatedRoute/AuthenticatedRoute';
import LoginPage from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import WelcomePage from './pages/welcome/index';
import Choice from './pages/choice/choice';
import './App.css';
import OwnerHomePage from './pages/owner/index.tsx';
import ProfilePage from './pages/profile/index.tsx';
import { TenantHomePage } from './pages/tenant';
import SignUpForm from './pages/signup/signUpForm.jsx';
import MessagingPage from './pages/Messaging/index.jsx';
import ConversationDetail from './domains/Messaging/views/Details/ConversationDetails.jsx';
import LikedUsers from './domains/Owner/views/LikedUsers/LikedUsers';

function App() {
  return (
    <AuthProvider>
      <SocketProvider> {/* Envelopper l'application avec SocketProvider */}
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
              path="/profile"
              element={
                <AuthenticatedRoute allowedRoles={['tenant']}>
                  <ProfilePage />
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
            <Route
              path="/profile"
              element={
                <AuthenticatedRoute allowedRoles={['owner']}>
                  <ProfilePage />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/owner/messages/:conversationId"
              element={
                <AuthenticatedRoute allowedRoles={['owner']}>
                  <ConversationDetail />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/tenant/messages/:conversationId"
              element={
                <AuthenticatedRoute allowedRoles={['tenant']}>
                  <ConversationDetail />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/accommodations/:accommodationId/likes"
              element={
                <AuthenticatedRoute allowedRoles={['owner']}>
                  <LikedUsers />
                </AuthenticatedRoute>
              }
            />
          </Routes>
        </Router>
      </SocketProvider>
    </AuthProvider>
  );
}

export default App;
