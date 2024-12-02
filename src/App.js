import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing';
import Scrapy from './pages/Scrapy';
import Analysis from './pages/Analysis';
import Compare from './pages/Compare';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/scrapy" element={<Scrapy />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </Router>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Landing />} />
    //     <Route path="/scrapy" element={<Scrapy />} />
    //     <Route path="/analysis" element={<Analysis />} />
    //   
    //   </Routes>
    // </Router>
  );
}

export default App;
