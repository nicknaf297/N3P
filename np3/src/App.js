import './App.css';
import PageHeader from './components/header.jsx'
import Home from './Home.js';
import NikPage from './Nik.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <body>
          <PageHeader/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nik" element={<NikPage />} />
          </Routes>
      </body>
    </Router>
  );
}

export default App;
