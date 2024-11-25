import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/create';
import BlogDetails from './components/blog_details';
function App() {
  return (
    <Router>
    <Navbar />
    <div className='container mt-5'>
      <Routes>  {/* Replacing Switch with Routes */}
        <Route path="/" element={<Home />} />  {/* Updated Route syntax */}
        <Route path="/create" element={<Create />} />  {/* Updated Route syntax */}
        <Route path="/blog/:id" element={<BlogDetails />} />  {/* Updated Route syntax */}
      </Routes>
      
    </div>
  </Router>
  );
}

export default App;
