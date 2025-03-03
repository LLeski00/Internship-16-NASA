import { Link } from "react-router-dom";
import "@/components/Navbar/Navbar.css";
import { routes } from "@/constants/routes";

const Navbar = () => {
    return (
        <nav>
            <h1>NASA Explore</h1>
            <div className="navbar-links">
                <Link to={routes.HOME}>Home</Link>
                <Link to={routes.APOD}>APOD</Link>
                <Link to={routes.MARS_ROVER}>Mars Rover</Link>
                <Link to={routes.EARTH_IMAGERY}>Earth Imagery</Link>
                <Link to={routes.NEO}>NEO</Link>
                <Link to={routes.DETAILS}>Details</Link>
            </div>
        </nav>
    );
};

export default Navbar;
