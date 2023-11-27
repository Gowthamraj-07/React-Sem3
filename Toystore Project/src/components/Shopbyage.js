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
export default function Shopbyage()
{
    return(
<div className='shopby-age' id='shop-by-age'>
<h1 style={{color:'#E95144'}}>SHOP BY AGE</h1>
<div className="grid">
    <Grid container sx={{height:'170px'}} >
  <Grid xs={6} md={4} lg={2}>
    <div>
    <img src={require('./KidsImg/kid1.webp')} className='kiddo' />
    <p>0-11 months</p>
    </div>
  </Grid>
  <Grid xs={6} md={4} lg={2}>
    <div>
    <img src={require('./KidsImg/kid2.webp')} className='kiddo' />
    <p>1-2 years</p>
    </div>
    
  </Grid>
  <Grid xs={6} md={4} lg={2}>
  <div>
  <img src={require('./KidsImg/kid3.webp')} className='kiddo' />
  <p>3-6 years</p>
  </div>
    
  </Grid>
    <Grid xs={6} md={4} lg={2}>
  <div>
  <img src={require('./KidsImg/kid4.webp')} className='kiddo' />
  <p>7-9 years</p>
  </div>
    
  </Grid>
  <Grid xs={6} md={4} lg={2}>
  <div>
  <img src={require('./KidsImg/kid5.webp')} className='kiddo' />
  <p>10-16 years</p>
  </div>
    
  </Grid>
  <Grid xs={6} md={4} lg={2}>
  <div>
  <img src={require('./KidsImg/kid6.webp')} className='kiddo' />
  <p>Grown-ups</p>
  </div>
    
  </Grid>
 
</Grid>
</div>
</div>
    );
}