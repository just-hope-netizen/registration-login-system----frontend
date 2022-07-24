import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CheckIcon } from '../assets/svg';
import BgContainer from '../components/bg-img-container';
import LogoContainer from '../components/logo-container';
import { loadFromLocal, removeFromLocal } from '../helpers/local';
import { login, verify } from '../helpers/web';

function VerificationPage() {
  const navigate = useNavigate();

  const { userId, uniqueString } = useParams();

  function verifyAndLoginHandler() {
    verify(userId, uniqueString).then((result) => {
      if (result.verified === true) {
        const { email, password } = loadFromLocal();
         login(email, password).then((res) => {
           if (res.msg === 'user not found') {
             toast.info('User not found, you need to sign up.');
           } else if (res.msg === 'user is not verified') {
             toast.info('You have not verify your email.');
           } else if (
             res.msg ===
             'password does not match the one stored in the database'
           ) {
             toast.info('Wrong password!');
           } else {
             navigate('/home');
             toast.success('Welcome Back');
             removeFromLocal()
           }
         });
        
      }
    });
  }

  return (
    <div className='container'>
      <BgContainer />
      <div className='verify-container'>
        <LogoContainer />
        <div className='check-container'>
          <CheckIcon />
        </div>
        <h3>Email address confirmed</h3>
        <p>
          You have successfully verify your email address, click the button to
          activate your account and login.
        </p>
        <button className='verify-btn' onClick={verifyAndLoginHandler}>
          Proceed
        </button>
      </div>
    </div>
  );
}

export default VerificationPage;
