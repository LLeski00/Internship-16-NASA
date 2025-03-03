import { Link } from "react-router-dom";
import "@/components/Navbar/Navbar.css";
import { routes } from "@/constants/routes";

const Navbar = () => {
    return (
        <nav>
            <h1>NASA Explore</h1>
            <div className="navbar-links">
                <Link to={routes.HOME.path}>Home</Link>
                <Link to={routes.APOD.path}>APOD</Link>
                <Link to={routes.MARS_ROVER.path}>Mars Rover</Link>
                <Link to={routes.EARTH_IMAGERY.path}>Earth Imagery</Link>
                <Link to={routes.NEO.path}>NEO</Link>
                <Link to={routes.DETAILS.path}>Details</Link>
            </div>
        </nav>
    );
};

export default Navbar;
