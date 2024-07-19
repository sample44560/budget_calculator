import './App.css';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <h1>Budget Calculator</h1>
      {/* Select drop down here */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
