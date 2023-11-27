import { Button } from '@mui/material';
import './Regpopup.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Link} from 'react-router-dom'
export default function Popup(props)
{
    return(props.trigger)?(
            <div className="popup">
            <div className="popup-inner">
                <CheckCircleIcon style={{color:'white',width:'60px',height:'60px',marginRight:'15px'}}/>
                {/* <h3 className='success'>Success</h3> */}
                <p style={{color:'white',marginTop:'10px',marginRight:'15px',fontSize:'15px'}}>Your account has been <br/> succesfully created! <Link to='/Login' style={{color:'white'}}><span className='succes-login'>Login Now?</span></Link></p>
                {/* <Link to="/Login"><Button style={{backgroundColor:'#72C341', color:'white',borderRadius:'15px',marginTop:'10px'}}>Login</Button></Link> */}
            </div>
        </div>
        ): "";

}