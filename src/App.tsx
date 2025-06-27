import './App.css';
import CreateVenue from './components/CreateVenue';
import VenueAddEvents from './components/VenueAddEvents';
import VenueDetails from './components/VenueDetails';
import VenueList from './components/VenueList';
import Dashboard from './pages/Dashboard';
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />

       <Route path="/dashboard" element={<Dashboard />}>
        <Route path="venues" element={<VenueList />} />
        <Route path="addvenue" element={<CreateVenue />} />
         <Route path="venues/:id" element={<VenueDetails />} />
         <Route path="venues/:id/addevents" element={<VenueAddEvents />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
