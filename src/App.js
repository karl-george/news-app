import './App.css';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
