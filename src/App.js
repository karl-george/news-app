import './App.css';
import News from './Components/News';
import Business from './Components/Business';
import Header from './Components/Header';
import Sport from './Components/Sport';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<News />} />
          <Route path='/business' element={<Business />} />
          <Route path='/sport' element={<Sport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
