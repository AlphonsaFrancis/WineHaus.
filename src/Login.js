import React, { useState } from 'react';

const Login = ({setIslogin}) => {

  const [username,setUsername]  = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState();

  const formSubmit = (e)=>{
    e.preventDefault()
    console.log({username, password})
    if(username===""||password===""){
      setError('All fields are required !')
    }
    else{
      setError('');
      console.log('Form value is accepted.')
    }
  }
  return (
      <div className="right-panel">
        <h1>WineHaus</h1>
        <h2>Let Us Start..</h2>
        <form onSubmit={formSubmit}>
          <label htmlFor="username">User name or Email</label>
          <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>

          <p className='form-error'>{error}</p>
          
          <button type="submit">Sign in</button>
          
          {/* <div className="or-section">
            <span>or</span>
          </div>
          
          <button type="button" className="google-signin">
            <img src="google-icon-path.png" alt="Google Icon" />
            Sign in with Google
          </button> */}
          
          <div className="create-account">
            <a href="#" onClick={()=>setIslogin(false)}>New User? Create Account</a>
          </div>
        </form>
      </div>
  );
};

export default Login;
