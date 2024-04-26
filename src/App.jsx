import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { AuthProvider } from './domains/AuthenticatedRoute/contexts/AuthContext';
import AuthenticatedRoute from './domains//AuthenticatedRoute/AuthenticatedRoute';
import LoginPage from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import WelcomePage from './pages/welcome/index';
import Choice from './pages/choice/choice';
import './App.css';
import LandLordPage from './pages/landlord/landlord';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/choice" element={<Choice />} />

          <Route element={<AuthenticatedRoute />}>
            <Route path="/land" element={<LandLordPage />} />

            {/* routes protégées... */}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
