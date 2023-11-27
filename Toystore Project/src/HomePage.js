import SearchAppBar from "./components/Navbar";
import Slogon from "./components/Slogon";
import Shopbyage from "./components/Shopbyage";
import Legostore from "./components/LegoStore";
import PopularBrand from "./components/PopularBrands"
import Footer from "./components/Footer";
export default function Home(props)
{
    return(
        <div>
            <SearchAppBar flag={props.flag}/>
            <Slogon/>
            <Shopbyage/>
            <Legostore/>
            <PopularBrand/>
            <Footer/>
        </div>
    )
}