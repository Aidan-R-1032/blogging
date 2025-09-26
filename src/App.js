import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
// import Post from './components/Post';
// import PostContainer from './components/PostContainer'
// import PostForm from './components/PostForm'
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
        <nav>
          <Link to="/" className="nav-item"> Home </Link>
          <Link to="/about" className="nav-item"> About </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
    </div>
  );
}

export default App;
