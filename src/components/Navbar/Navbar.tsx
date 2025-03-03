import { Link } from "react-router-dom";
import "@/components/Navbar/Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <h1>NASA Explore</h1>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/apod">APOD</Link>
                <Link to="/mars-rover">Mars Rover</Link>
                <Link to="/earth-imagery">Earth Imagery</Link>
                <Link to="/neo">NEO</Link>
                <Link to="/details">Details</Link>
            </div>
        </nav>
    );
};

export default Navbar;
