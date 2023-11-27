import ToyStoreMenu from "./components/LegopageItems";
import ToysMenu from "./components/Legopageproducts";
import Legopage from "./components/Legopage";
import Footer from "./components/Footer";
export default function(props)
{
    return(
        <div>
            <Legopage flag={props.flag}/>
            <ToyStoreMenu/>
            <ToysMenu/>
            <Footer/>
        </div>
    )
}