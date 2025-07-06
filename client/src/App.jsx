import './App.css';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar'; // Make sure the path matches your project structure
import SearchPage from './pages/SearchPage'; // Import SearchPage
// import other pages as needed

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/SearchPage" element={<SearchPage />} />
          {/* Add more routes as needed, e.g.: */}
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;