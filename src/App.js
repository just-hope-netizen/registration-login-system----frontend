import './App.css';
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/signup-page';
import Verify from './pages/verify-page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/home' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
