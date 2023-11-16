import './App.css';
import React from 'react';

class Car extends React.Component
{
    render() {
        return (
          <>
            <h1>Car : Rolls Royce</h1>
            <img
              src="https://images.dealer.com/ddc/vehicles/2022/Rolls-Royce/Phantom/Sedan/color/Iguazu%20Blue-R93-16,24,64-640-en_US.jpg"
              alt="Rolls-Royce"
            />
          </>
        )
    }
}

function Location()
{
    return (
      <>
        <h1>CompanyName: SKCET</h1>
        <h1>CityName: Coimbatore</h1>
      </>
    )
}

function App() {
  return (
    <>
      <Car />
      <Location />
    </>
  );
}

export default App;
