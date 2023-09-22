import { useNavigate } from 'react-router-dom';
import './login.scss'
import { useEffect, useState } from 'react';
import CenterFocusWeakOutlinedIcon from '@mui/icons-material/CenterFocusWeakOutlined';
import { auth } from '../../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth'



const Login = () => {


        const [switched, setSwitched] = useState(true)
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [errMessage, setErrMessage] = useState(false);

        const navigate = useNavigate()

const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        const user = userCredential.user;
        localStorage.setItem('token', user.accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/')
    } catch (error) {
        setErrMessage(error);
        console.log(error);
        
    }
}


  return (
    <div className='login' style={{ backgroundImage: "url(./img/bg2.jpg)"
}}>



     <div className="LogoWrap">
                <CenterFocusWeakOutlinedIcon className='icon'/>
               <span className='logo'>fotohub</span>
            </div>

        {/* Content */}

       {switched && <div className="contentContainer">
        <div className="contentCard">
            <h1 className="conTitle">Click, drag, drop, and immerse yourself in the world of  Beauty Moments</h1>  
            <p className='content'>Welcome to fotohub - Where every image tells a story, and every story begins with a single click. Imagine a world where every moment, no matter how fleeting, can be preserved forever. </p>
            <div className="switch">
               <button onClick={() => setSwitched(!switched)} className='btn'>Start for free</button>
               </div>
        </div>
        </div>}

        {/* sign in */}

       {!switched && <div className="formContainer">
        <div className="formCard">
            <h1 className="formTitle">Login</h1>  
            <p className="formTitle">Login with - Email: user@example.com | Password: 1Password</p>  
            <form onSubmit={handleSubmit} className='formWrap' >
            <div className='form'>
            <label htmlFor="email">Email</label>
      <input type="text" id="email" placeholder="Email" name='email'  value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className='form'>
            <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <button  type="submit" className="signBtn">Login</button>
        {errMessage && <span className='error'>Login with - Email: user@example.com | Password: 1Password</span>}
            </form>
        </div> 
        </div>}
    </div>
  )
}

export default Login