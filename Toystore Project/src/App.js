
import './App.css';
import Login from './components/Login';
import ButtonAppBar from './components/Slogon';
import SignUp from './components/Reg';
import SearchAppBar from './components/Navbar';
import Slogon from './components/Slogon';
import Brands from './components/PopularBrands';
import Shopbyage from './components/Shopbyage';
import Legostore from './components/LegoStore';
import Footer from './components/Footer';
import Home from './HomePage';
import Legopage from './components/Legopage';
import LegoHomePage from './LegoHomePage';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
function App()
{
  return (    
    <div className='App'>
       <Router>
      
        <Routes>

          <Route exact path='/' element={<Home flag={true}/>}></Route>
          <Route exact path='/Main' element={<Home flag={false}/>}></Route>
          <Route exact path='/Login' element={<Login flag={true}/>}></Route>
          <Route exact path='/Reg' element={<SignUp flag={true}/>}></Route>
          <Route exact path='/HomePage' element={<Home flag={true}/>}></Route>
          <Route exact path='/Legopage' element={<LegoHomePage flag={false}/>}></Route>
        </Routes>
      </Router> 
     
      
        
      
    </div>
  );
}

export default App;
