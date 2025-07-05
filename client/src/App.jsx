import './App.css';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './navbar'; // Make sure the path matches your project structure

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        {/* You can add your new content/routes here */}
      </Container>
    </Router>
  );
}

export default App;