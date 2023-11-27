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
export default function Brands()
{
    return(
        <div className='featurebrands' style={{backgroundColor:'white'}} id='popbrands'>
        <h2 style={{margin:'0 0 10px 0',paddingTop:'30px',marginBottom:'45px'}}>POPULAR BRANDS</h2>
        <Grid container sx={{height:'170px'}} >
        <Grid xs={6} md={4} lg={2}>
          <div>
          <img src={require('./BrandImg/hotwheel.webp')} className='brandname' />
         
          </div>
        </Grid>
        <Grid xs={6} md={4} lg={2}>
          <div>
          <img src={require('./BrandImg/disney.webp')} className='brandname' />
          
          </div>
          
        </Grid>
        <Grid xs={6} md={4} lg={2}>
        <div>
        <img src={require('./BrandImg/starwar.webp')} className='brandname' />
        
        </div>
          
        </Grid>
          <Grid xs={6} md={4} lg={2}>
        <div>
        <img src={require('./BrandImg/transformer.webp')} className='brandname' />
       
        </div>
          
        </Grid>
        <Grid xs={6} md={4} lg={2}>
        <div>
        <img src={require('./BrandImg/nerf.webp')} className='brandname' />
       
        </div>
          
        </Grid>
        <Grid xs={6} md={4} lg={2}>
        <div>
        <img src={require('./BrandImg/barbie.webp')} className='brandname' />
       
        </div>
          
        </Grid>
       
      </Grid>
    </div>
    )
}