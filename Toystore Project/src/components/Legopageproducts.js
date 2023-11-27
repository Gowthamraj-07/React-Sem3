// ToyStoreMenu.js
import React from 'react';
import './Legopage.css';
import { Button } from '@mui/material';
const toyData = [
  {
    id: 1,
    name: `Nya's Dragon Power Spinjitzu Drift1`,
    imageUrl: require('./LegoToys/toy1.webp'),
  },
  {
    id: 2,
    name: `Lloyd's Dragon Power Spinjitzu Spin`,
    imageUrl: require('./LegoToys/toy2.webp'),
  },
  {
    id: 3,
    name: `Nya and Arin's Baby Dragon Battle`,
    imageUrl: require('./LegoToys/toy3.webp'),

  },
  {
    id: 4,
    name: `Kai’s Dragon Power Spinjitzu Flip`,
    imageUrl: require('./LegoToys/toy4.webp'),

  },
  {
    id: 5,
    name: `NINJAGO® City Markets`,
    imageUrl: require('./LegoToys/toy5.webp'),

  },
  {
    id: 6,
    name: `EDragon vs. The Empress Mech`,
    imageUrl: require('./LegoToys/toy6.webp'),

  },
  {
    id: 7,
    name: `Lloyd's Hydro Mech`,
    imageUrl: require('./LegoToys/toy7.webp'),

  },
  {
    id: 8,
    name: `Nightmare Shark Ship`,
    imageUrl: require('./LegoToys/toy8.webp'),

  }
];

const ToysMenu = () => {
  return (
    <div>
    <div className="container mt-5 text-center">
      
      <div className="row justify-content-center">
        {toyData.map((toy) => (
          <div key={toy.id} className="col-lg-4 col-md-6 mb-4 text-center" style={{width:'20rem'}}>
            {/* Adjust the number of columns for different screen sizes */}
            <div className='toy-grid-div' style={{marginBottom:'30px',padding:'40px 20px 20px 20px' ,borderRadius:'5px',height:'28rem'}}>
                <div style={{height:'18rem'}}>

              <img
                src={toy.imageUrl}
                className="card-img-top"
                alt={`Toy ${toy.id}`}
                style={{borderRadius:'0'}}
              />
                </div>
              <p>{toy.name}</p>
              <Button style={{backgroundColor:'#D83D4C',color:'white'}}>Add to Cart</Button>
             
            </div>
          </div>
        ))}
      </div>

    </div>
    
      </div>
  );
};

export default ToysMenu;