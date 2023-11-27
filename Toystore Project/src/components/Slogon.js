import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './home.css';
export default function Slogon()
{   return(

     
     <div className='legoshop'>
      <div className='slogon'>
        <h3 style={{fontSize:'24px'}}>Embrace your childhood with <span className='brand' style={{color:'white'}}>TinyTreasures</span> </h3>
        <h1>Where Fun Knows No Bounds!</h1>

      </div>
      <div className='shop-btn'>
        <h5 style={{color:'white',marginBottom:'10px'}}>Get your First Joy</h5>
        <Button variant="contained" sx={{backgroundColor:'#FCCF39',":hover":{backgroundColor:'#b59d5d'},color:'#E95144',width:'145px',height:'50px'}}><p style={{margin:'0',padding:'0',border:'0'}}>Shop Now!</p></Button>
        
      </div>
     </div>
     
    
   
    
  );
}
