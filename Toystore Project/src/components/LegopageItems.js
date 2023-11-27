// ToyStoreMenu.js
import React from 'react';
import './Legopage.css';
import Footer from './Footer';
import ToysMenu from './Legopageproducts';
const toyData = [
  {
    id: 1,
    imageUrl: require('./Legopage-collections/c1.webp'),
  },
  {
    id: 2,
    imageUrl: require('./Legopage-collections/c2.webp'),
  },
  {
    id: 3,
    imageUrl: require('./Legopage-collections/c3.webp'),

  },
  {
    id: 4,
    imageUrl: require('./Legopage-collections/c4.webp'),

  },
  {
    id: 5,
    imageUrl: require('./Legopage-collections/c5.webp'),

  },
  {
    id: 6,
    imageUrl: require('./Legopage-collections/c6.webp'),

  },
  {
    id: 7,
    imageUrl: require('./Legopage-collections/c7.webp'),

  },
  {
    id: 8,
    imageUrl: require('./Legopage-collections/c8.webp'),

  },
  {
    id: 9,
    imageUrl: require('./Legopage-collections/c9.webp'),

  },
  {
    id: 10,
    imageUrl: require('./Legopage-collections/c10.webp'),

  },
  {
    id: 11,
    imageUrl: require('./Legopage-collections/c11.webp'),

  },
  {
    id: 12,
    imageUrl: require('./Legopage-collections/c12.webp'),

  },
];

const ToyStoreMenu = () => {
  return (
    <div>
    <div className="container mt-5 text-center">
      
      <div className="row justify-content-center">
        {toyData.map((toy) => (
          <div key={toy.id} className="col-lg-4 col-md-6 mb-4 text-center" style={{width:'20rem'}}>
            {/* Adjust the number of columns for different screen sizes */}
            <div style={{marginBottom:'30px'}}>
              <img
                src={toy.imageUrl}
                className="card-img-top"
                alt={`Toy ${toy.id}`}
                style={{borderRadius:'0'}}
              />
             
            </div>
          </div>
        ))}
      </div>

    </div>
      <div className='ninjago'>
      </div>
      
      </div>
  );
};

export default ToyStoreMenu;