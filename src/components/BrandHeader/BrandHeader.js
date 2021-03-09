import NavBarItems from "../NavBars/NavBarItems";
import NavBar from "../NavBars/NavBar";
import Brand from "./Brand";
import "./BrandHeader.css";

function BrandHeader({ children }){
    return(
        <header className="bg-indigo-600 border-b-2">
            <Brand title="MyReactApp"></Brand>
            <NavBar>
            
            </NavBar>
        </header>
    );
}

export default BrandHeader;