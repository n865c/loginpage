import React from 'react'
import '../App.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import email from '../images/email.png';
import password from '../images/pass.png';
const loginPage = () => {
  return (
    <div className="main">
      <div  className='sub-main'>
      <div>
        <div className='imgs'>
          <div className='contanier-image'>
            <AccountCircleIcon
            sx={{color:'black',
            height:100,width:240,
            }}/>
          </div>
        </div>
        <div>
          <h1>Login Page</h1>
          <div>
            <img src={email} alt="email" className='email'/>
            <input
            type="text"
            placeholder='username'
            className='name'/>
          </div>
          <div className='second-input'>
            <img src={password} alt="pass" className='pass'/>
            <input
            type="password"
            placeholder='Password'
            className='name'/>
          </div>
          <div className='login-button'>
          <button>Login</button>
          </div>
          <div >
            <p className='link'>
              <a href="#">Forgot Password ?</a> Or <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default loginPage;
