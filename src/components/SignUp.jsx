import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleSignedInStatus = () => {
    setSignedIn(!signedIn);
  };

  return (
    <div className='mt-10 lg:mt-20 pb-40'>
      <div className='lg:w-[60%] w-full m-auto max-lg:px-5'>
        {signedIn ? (
          // SIGNED IN VIEW
          <div>
            <h1 className='text-2xl mb-8 font-bold'>
              Sign in to your Al Jazeera account.
            </h1>
            <form
              className='flex flex-col justify-center items-start gap-5 lg:gap-8 mb-8'
              onSubmit={handleSignUp}
            >
              <label className='flex gap-1 flex-col justify-center items-start' htmlFor='email'>
                E-mail:
                <input
                  type='email'
                  placeholder='E-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='p-3 lg:w-[500px] w-[350px] border-solid border-2 border-gray-200 rounded'
                />
              </label>

              <label htmlFor='password' className='flex gap-1 flex-col justify-center items-start'>
                Password:
                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='p-3 lg:w-[500px] w-[350px] border-solid border-2 border-gray-200 rounded'
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className='cursor-pointer absolute right-4 top-4 text-xl'
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
                </div>
                <div className='font-bold underline cursor-pointer'>
                  Forgot Password?
                </div>
              </label>

              <button type='submit' className='px-16 py-2 bg-aljazeera text-white text-xl rounded-full'>
                Sign in
              </button>
            </form>
          </div>
        ) : (
          // SIGN UP VIEW
          <div>
            <h1 className='text-2xl mb-8 font-bold'>
              Enrich your Al Jazeera experience by creating an account.
            </h1>
            <form
              className='flex flex-col justify-center items-start gap-8 mb-8'
              onSubmit={handleSignUp}
            >
              <label className='flex gap-1 flex-col justify-center items-start' htmlFor='email'>
                E-mail:
                <input
                  type='email'
                  placeholder='E-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='p-3 lg:w-[500px] w-[350px] border-solid border-2 border-gray-200 rounded'
                />
              </label>

              <label htmlFor='password' className='flex gap-1 flex-col justify-center items-start'>
                Password:
                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='p-3 lg:w-[500px] w-[350px] border-solid border-2 border-gray-200 rounded'
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className='cursor-pointer absolute right-4 top-4 text-xl'
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
                </div>
                <div>Password must contain 8+ characters.</div>
              </label>

              <div>
                <input type='checkbox' name='checkbox' className='cursor-pointer' />
                <span> You agree to receive updates from Al Jazeera over email. You can opt out at any time</span>
              </div>

              <button type='submit' className='px-16 py-2 bg-aljazeera text-white text-xl rounded-full'>
                Sign up
              </button>
            </form>
          </div>
        )}

        <div className='mb-8'>
          <span>{signedIn ? 'Need an account?' : 'Already have an account?'}</span>
          <span
            onClick={toggleSignedInStatus}
            className='font-bold underline cursor-pointer ml-1'
          >
            {signedIn ? 'Sign up' : 'Sign in'}
          </span>
        </div>

        <p className='text-xs'>
          {!signedIn && 'By continuing, you agree to the T&C & Privacy Policy. Your activity may be used to personalise your experience with Al Jazeera products.'}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
