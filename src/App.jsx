import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { AuthProvider } from './domains/AuthenticatedRoute/contexts/AuthContext';
import AuthenticatedRoute from './domains//AuthenticatedRoute/AuthenticatedRoute';
import Login from './domains/Login/views/login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* autres routes... */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;