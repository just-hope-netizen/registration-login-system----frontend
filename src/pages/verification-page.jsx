import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CheckIcon } from '../assets/svg';
import Backdrop from '../components/backdrop';
import BgContainer from '../components/bg-img-container';
import LogoContainer from '../components/logo-container';
import { login, verify } from '../helpers/web';

function VerificationPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { userId, uniqueString } = useParams();

  function verifyAndLoginHandler() {
    setIsLoading(true);

    verify(userId, uniqueString).then((result) => {
      if (result.verified === true) {
        login(result.email, result.decryptPassword).then((res) => {
          if (res.msg === 'Access granted') {
            navigate('/home');
            toast.success('Welcome');
          } else {
            setIsLoading(false);
            toast.error('Something went wrong, try again.');
          }
        });
      } else {
        setIsLoading(false);
        toast.error('Something went wrong, try again.');
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
        {isLoading && <Backdrop />}
      </div>
    </div>
  );
}

export default VerificationPage;
