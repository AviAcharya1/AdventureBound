import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import TravelAgentDashboard from './pages/TravelAgentDashboard.jsx';
import UserProfile from './pages/UserProfile.jsx';
import JourneyPlanner from './pages/JourneyPlanner.jsx';
import EventPlanner from './pages/EventPlanner.jsx';
import ProVersion from './pages/ProVersion.jsx';
import Navbar from './components/Navbar.jsx';
import ProtectedRoute from './components/ProtectedRoutes';
import { AuthProvider } from './context/AuthContext.js';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <ProtectedRoute path="/admin" roles={['admin']} component={AdminDashboard} />
          <ProtectedRoute path="/travel-agent" roles={['travelAgent', 'admin']} component={TravelAgentDashboard} />
          <ProtectedRoute path="/profile" roles={['user', 'travelAgent', 'admin']} component={UserProfile} />
          <ProtectedRoute path="/journey-planner" roles={['user', 'travelAgent', 'admin']} component={JourneyPlanner} />
          <ProtectedRoute path="/event-planner" roles={['user', 'travelAgent', 'admin']} component={EventPlanner} />
          <ProtectedRoute path="/pro-version" roles={['user', 'travelAgent', 'admin']} component={ProVersion} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
