// Footer.jsx

import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-container">
        <div className="footer-section">
          <h3>INFORMATION</h3>
          <p>Returns & Cancellation</p>
          <p>Refunds</p>
          <p>Shipping Policy</p>
          <p>Privacy And Cookies</p>
          <p>Terms & Condition</p>
          <p>Disclaimer</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-section">
          <h3>FEATURED BRANDS</h3>
          <p>Disney</p>
          <p>Transformers</p>
          <p>Nerf</p>
          <p>Lego</p>
          <p>HotWheels</p>
          <p>Marvel</p>
          <p>Barbie</p>
        </div>
        <div className="footer-section">
          <h3>CATEGORIES</h3>
            <p>Toys & Games</p>
            <p>Baby Care & Gears</p>
            <p>Party Decoration</p>
            <p>Kids Books</p>
            <p>Action Figures</p>
            <p>Play & School Furnitures</p>
            <p>Collectibles</p>
        </div>
        <div className="footer-section">
          <h3>NEWSLETTER SIGN UP</h3>
            <p>Sign up for exclusive updates, new arrivals & insider only discounts</p>
       <Link to='/Reg'><Button variant="contained" sx={{backgroundColor:'#FCCF39',":hover":{backgroundColor:'#b59d5d'},color:'#E95144'}}><h5 style={{margin:'0',padding:'3px'}}>SIGN UP</h5></Button></Link> 
        <h3 style={{marginTop:'20px'}}>FOLLOW TINYTREASURES HERE</h3>
           <div className="social-icons">
            <FacebookIcon style={{marginRight:'10px'}}/>
            <TwitterIcon style={{marginRight:'10px'}} />
            <InstagramIcon style={{marginRight:'10px'}} />
            <LinkedInIcon style={{marginRight:'10px'}}/>
          </div>

           
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 TinyTreasures Toy Store. All rights reserved.</p>
      </div>
    </footer>
  );
};


