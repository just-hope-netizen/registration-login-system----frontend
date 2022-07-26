import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom'
import ConfirmationPage from './pages/confirmation-page';
import SignupPage from './pages/signup-page';
import VerificationPage from './pages/verification-page';
import HomePage from './pages/home-page';
import SigninPage from './pages/signin-page';
import ForgottenPage from './pages/forgotten-page';
import ChangePassPage from './pages/change-pass-page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SigninPage />} />
        <Route path='/register' element={<SignupPage />} />
        <Route path='verify/:userId/:uniqueString' element={<VerificationPage />} />
        <Route path='/confirmation' element={<ConfirmationPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/forgotten-password' element={<ForgottenPage />} />
        <Route path='/change-password/:userId' element={<ChangePassPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
