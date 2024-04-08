import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { AuthProvider } from './domains/AuthenticatedRoute/contexts/AuthContext';
import AuthenticatedRoute from './domains//AuthenticatedRoute/AuthenticatedRoute';
import Login from './domains/Login/views/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Welcome from './pages/welcome/welcome';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Welcome />} />
          {/* autres routes... */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
