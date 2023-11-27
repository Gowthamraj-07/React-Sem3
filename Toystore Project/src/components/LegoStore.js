import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './home.css';
import {Link} from 'react-router-dom';

const ToyGrid = () => {
  const toys = [
    {
      id: 1,
      name: `McQueen & Mater's Car Wash Fun For Ages 6+`,
      description: 'LEGO',
      imageUrl: require('./LegoImg/lego1.png'),
    },
    {
      id: 2,
      name: `Sora's Transforming Mech Bike Racer For Ages 8+`,
      description: 'LEGO',
      imageUrl: require('./LegoImg/lego3.png'),
    },
    {
      id: 3,
      name: `McQueen & Mater's Car Wash Fun For Ages 6+`,
      description: 'LEGO',
      imageUrl: require('./LegoImg/lego1.png'),
    },
    {
      id: 4,
      name: `Sora's Transforming Mech Bike Racer For Ages 8+`,
      description: 'LEGO',
      imageUrl: require('./LegoImg/lego3.png'),
    },
    // Add more toy objects as needed
  ];

  return (
    <div className='lego-store' id='lego-shop'>
      <h1 style={{color:'',paddingTop:'20px'}}>THE LEGO SHOP</h1>
      <Link to='/Legopage'><h5>VISIT LEGO STORE</h5></Link>
    <Grid container spacing={3} style={{marginTop:'2rem'}}>
      {toys.map((toy) => (
        <Grid key={toy.id} item xs={12} sm={6} md={4} lg={3}>
           <Card >
              <img className='lego'
                src={toy.imageUrl}
                alt={toy.name}
                style={{ height: 140, objectFit: 'cover' }}
              />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {toy.description}
              </Typography>
              <Typography gutterBottom variant="p" component="div">
                {toy.name}
              </Typography>
            </CardContent>
            <Button variant="contained" sx={{backgroundColor:'#FFCF00',":hover":{backgroundColor:'#f4c802'},marginTop:'0',marginBottom:'30px'}}><ShoppingCartIcon style={{color:'black'}}/><h5 style={{margin:'0 0 0 5px',padding:'3px', color:'black'}}>Add to cart</h5></Button>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  );
};

export default ToyGrid;
