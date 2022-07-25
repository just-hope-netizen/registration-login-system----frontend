import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import BgContainer from '../components/bg-img-container';
import FormInput from '../components/form-input';
import { Eye, EyeOff } from '../assets/svg';
import { validatePassword } from '../helpers/validate';
import LogoContainer from '../components/logo-container';
import { changePassword } from '../helpers/web';
import Backdrop from '../components/backdrop';

function ChangePassPage() {
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const { userId } = useParams();
  const navigate = useNavigate();

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    setIsLoading(true);

    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword){
      setPasswordMatch(false);
      setIsLoading(false);

    } else{
      const validatedPassword = validatePassword(password);
      if (!validatedPassword) {
        setPasswordError(true);
      setIsLoading(false);

      } else {
        changePasswordHandler(password, userId);
      }

    }
  }

  function changePasswordHandler(password, userId) {
    changePassword(password, userId).then((res) => {
      if (res === 'Pasword changed successfully.') {
        navigate('/login')
      } else {
        toast.error('Something went wrong, try again.');
      setIsLoading(false);

        
      }
    });
  }
  return (
    <div className='container'>
      <BgContainer />
      <div className='form-container'>
        <LogoContainer />
        <form onSubmit={submitHandler}>
          <FormInput
            label={'New password'}
            type={showPassword ? 'text' : 'password'}
            placeholder={'password'}
            name={'password'}
            refer={passwordRef}
            className={`${
              (passwordError && 'error') || (passwordMatch ? null : 'error')
            })`}
            errorMsg={
              (passwordError &&
                ' 7 to 15 characters with one numeric value and special character e.g. 123qwerty$') ||
              (passwordMatch ? null : 'password do not match')
            }
          >
            <button
              type='button'
              className='show-pass-btn'
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {' '}
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </FormInput>
          <FormInput
            label={'Confirm password'}
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder={'password'}
            name={'password'}
            refer={confirmPasswordRef}
            className={`${passwordMatch ? null : 'error'})`}
            errorMsg={passwordMatch ? null : 'password do not match'}
          >
            <button
              type='button'
              className='show-pass-btn'
              onClick={() => {
                setShowConfirmPassword(!showConfirmPassword);
              }}
            >
              {' '}
              {showConfirmPassword ? <Eye /> : <EyeOff />}
            </button>
          </FormInput>
          <button className='form-btn'>Change Password</button>
        </form>
        {isLoading && <Backdrop />}
      </div>
    </div>
  );
}

export default ChangePassPage;
