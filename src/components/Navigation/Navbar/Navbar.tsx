import { Link } from "react-router-dom";
import "./Navbar.css";
import { routes } from "@/constants/routes";
import { useTheme } from "@/hooks";
import { Button } from "@mui/material";
import { Hamburger } from "@/components";

const Navbar = () => {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <nav
            className={isDarkTheme ? "dark-theme" : "light-theme"}
            style={{
                backgroundColor: isDarkTheme
                    ? "var(--dark-theme-background-color)"
                    : "var(--nasa-blue-color)",
            }}
        >
            <h1>NASA Explorer🚀</h1>
            <div className="navbar-links">
                <Link to={routes.HOME.path}>Home</Link>
                <Link to={routes.APOD.path}>APOD</Link>
                <Link to={routes.MARS_ROVER.path}>Mars Rover</Link>
                <Link to={routes.EARTH_IMAGERY.path}>Earth Imagery</Link>
                <Link to={routes.NEO.path}>NEO</Link>
            </div>
            <Button
                onClick={toggleTheme}
                variant="contained"
                style={{
                    backgroundColor: isDarkTheme
                        ? "var(--nasa-blue-color)"
                        : "var(--nasa-red-color)",
                }}
            >
                Toggle theme
            </Button>
            <Hamburger />
        </nav>
    );
};

export default Navbar;
