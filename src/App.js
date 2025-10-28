import './App.css';
import {Routes, Route, Link} from 'react-router-dom'

import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import { UserProvider } from './components/UserContext';
import { PostsProvider } from './components/PostsContext';

function App() {
  return (
    <PostsProvider>
    <UserProvider>
      <div className="App">
          <header>
              <h1> Aidan Ruiz's Personal Blog! </h1>            
          </header>
          <nav>
            <Link to="/" className="nav-item"> Home </Link>
            <Link to="/about" className="nav-item"> About </Link>
          </nav>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
      </div>
    </UserProvider>
    </PostsProvider>
  );
}

export default App;
