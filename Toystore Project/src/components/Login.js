import './Login.css';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchAppBar from './Navbar';
import {useState} from 'react';
import LoginPopup from './Loginerrorpopup';
import {Link, redirect,useHistory,Navigate, useNavigate  } from 'react-router-dom'
import axios from 'axios';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function Login(props)
{
  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [popup, setPopup] = useState(false);


const fetch=async()=>{
  const response=await axios.get(`http://localhost:3001/users`);
  response.data.map((obj)=>{
    if(obj.email===username)
    {
     
      if(obj.password===password)
      {
        console.log('Succes')
        navigate('/Main')
      }
      else{
        setPopup(true);
      }
    }
    else{
      setPopup(true);
    }
  })
};

// const handleLogin = async () => {
//   try {
//     const response = await axios.get(`http://localhost:3001/users`);
//     const users = response.data.users;

//     console.log('Users from db.json:', users);
//     console.log('Username and Password:', username, password);

//     if (users) {
//       const user = users.find(
//         (u) =>
//           u.email.toLowerCase() === username.toLowerCase() &&
//           u.password === password
//       );

//       console.log('Found User:', user);

//       if (user) {
//         // Login successful
//         console.log('Login successful');
//       } else {
//         // Invalid credentials
//         console.log('Invalid credentials');
//       }
//     } else {
//       // Handle case where 'users' array is undefined
//       console.log('No users found');
//     }
//   } catch (error) {
//     console.error('Error during login validation', error);
//   }
// };

      
    const[visible,setVisible]=useState(false);
    const[type,setType]=useState('password');
    function handleVisible()
    {
        if(type==='password')
        {
        setVisible(true);
        setType('text');

        }
        else
        {
            setVisible(false);
            setType('password');

        }
    }
    
    return(
        <div id='login-flex'>
            <SearchAppBar flag={props.flag}/>
        <div className='logpage'>
            <LoginPopup trigger={popup}/>
        <div className="logindiv" >
            
            <h1>Have an account?</h1>
            <form onSubmit={fetch}>
            <TextField
            required
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            placeholder='Username'
            name="username"
            InputProps={{
              sx: { backgroundColor:'rgba(255, 255, 255, .3)',width:'390px', color: 'white',marginBottom:'25px', borderRadius: '20px' },
              placeholderTextColor: 'white',
            }}
          />
            <br />
            <div className='pass-field' style={{borderColor:"transparent"}}>
            <TextField
    placeholder="Password"
    onChange={(e) => setPassword(e.target.value)}
    type={type}
    InputProps={{
        sx: { backgroundColor:'rgba(255, 255, 255, .3)',width:'390px', color: 'white',marginBottom:'25px', borderRadius: '20px' },
        placeholderTextColor: 'white',
      endAdornment: (
        <InputAdornment position="end">
                <IconButton
                    onClick={
                        handleVisible
                    }
                    
                >
                    {visible ? (
                        <VisibilityIcon/>
                    ) : (
                        <VisibilityOffIcon />
                    )}
                </IconButton>
            </InputAdornment>
      ),
    }}
    />

            </div>
            
            <Button variant="contained" className='submit' onClick={fetch}>SIGN IN</Button>
            </form>
            <div className="remember">
            <Checkbox {...label} style={{color:'white'}} />
            <label>Remember Me</label>
            <label id='forgot'><a href="">Forgot password?</a></label>
            </div>
            <div className='altersignin'>

                <div> 
                <img src={require('./LoginPageImg/googl.png')} id='google' />
                <label htmlFor="" className='alterlog'><h6 style={{marginTop:'3px',fontSize:'14px'}}>Login with Google</h6></label>
                </div>
                <div>
                <img src={require('./LoginPageImg/fb-logo.jpg')} id='fb' />
                <label htmlFor="" className='alterlog'><h6 style={{marginTop:'5px',fontSize:'13px'}}>Login with Facebook</h6></label>
                </div>
            </div>
            <Link to='/Reg'><h5>Create an account?</h5></Link>


        </div>
        </div>
        
        </div>
    )
}