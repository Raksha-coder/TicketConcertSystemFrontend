import './App.css';
import Dashboard from './components/Dashboard';
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  );
}

export default App;
