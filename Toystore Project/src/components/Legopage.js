import './Legopage.css';
import SearchAppBar from './Navbar';
import ToyStoreMenu from './LegopageItems';
export default function Legopage(props)
{
    return(
        <div>
            <SearchAppBar flag={props.flag}/>
        <div className='img-div'> 
        </div>
        <div>
        <div class="container text-center" className='feature-div' style={{padding:'50px 140px'}}>
            <div class="row">
                 <div class="col">
                  <img src={require('./LegoPage/Legoinsider.webp')} alt="" />
                  <p>LEGO® Insiders</p>
                </div>
                <div class="col">
                <img src={require('./LegoPage/creator.webp')} alt="" />
                <p>Creator 3in1</p>
                </div>
                <div class="col">
                <img src={require('./LegoPage/duplo.webp')} alt="" />
                <p>DUPLO®</p>
                </div>
                 <div class="col">
                  <img src={require('./LegoPage/city.webp')} alt="" />
                  <p>City</p>
                </div>
                <div class="col">
                <img src={require('./LegoPage/ninja.webp')} alt="" />
                <p>NINJAGO®</p>
                </div>
                <div class="col">
                <img src={require('./LegoPage/technic.webp')} alt="" />
                <p>Technic</p>
                </div>
            </div>
            </div>
        </div>
        <div id="carouselExampleIndicators" class="carousel slide"  data-bs-ride="carousel" style={{padding:'0 40px'}}>
  <div class="carousel-indicators" data-bs-ride="carousel">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" >
    <div class="carousel-item active carosel-lego">

      <img src={require('./LegoPage/Legoslider1.webp')} class="d-block w-100" alt="..." style={{borderRadius:'0',height:'313x'}}/>
    </div>
    <div class="carousel-item">
      <img src={require('./LegoPage/Legoslider2.webp')} class="d-block w-100" alt="..." style={{borderRadius:'0',height:'330x'}}/>
      
    </div>
    <div class="carousel-item">
   
      <img src={require('./LegoPage/Legoslider3.webp')} class="d-block w-100" alt="..." style={{borderRadius:'0'}}/>
    </div>
  </div>
  <button class="carousel-control-prev prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


        </div>
    )
}