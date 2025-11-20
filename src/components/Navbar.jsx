
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"

const Navbar = () => {


    return (


        <>
            <div className="navbardesign">
                <div className="logo">
                    <img src={logo} alt="images" />
                </div>

                <div className="name">
                    <h1>RISE  ROAR  REVOLT</h1>
                </div>

                <div className="dynamic">
                    <Link className="links"  to="/">HOME</Link>

                    <Link className="links" to="/About">ABOUT</Link>

                    <Link className="links" to="/hero">HEROS</Link>

                    <Link className="links" to="/detail"> DETAILS</Link>

                    <Link className="links" to="/ticket">TICKETS</Link>

                    
                </div>





            </div>












        </>
    )



}
export default Navbar;