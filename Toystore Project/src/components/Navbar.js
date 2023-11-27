import {Link} from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import {useState} from 'react';
export default function SearchAppBar(props)
{
  const flag=props.flag
  return(
    <nav class="navbar  fixed-top navbar-expand-lg navbar-light bg-light" id="navbar-bt">
  <div class="container-fluid navbar-bt">
    <Link to='/HomePage'><a class="navbar-brand" href="#"><h3 className="brand">TinyTreasures</h3></a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/Legopage'><a class="nav-link">Lego</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#shop-by-age">Shop by Age</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#popbrands">Brands</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#footer">Contact Us</a>
        </li>
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{height:'38px'}}/>
        <button class="btn btn-outline-dark" type="submit" style={{height:'38px'}}>Search</button>
        {flag?(<Link to='/Login'><button class="btn btn-dark" style={{marginLeft:'10px'}}>Login</button></Link>):
        (<button class="btn btn-dark" style={{marginLeft:'10px'}}><PersonIcon/></button>)}
      </form>
    </div>
  </div>
</nav>
  )
}