import { routes } from "@/constants/routes";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Hamburger.css";
import { Button } from "@mui/material";
import { useTheme } from "@/hooks";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <div className="hamburger">
            <div
                onClick={() => setIsOpen((prev) => !prev)}
                className="hamburger__icon"
            >
                ≡
            </div>
            {isOpen && (
                <div className="hamburger__menu">
                    <Link to={routes.HOME.path}>Home</Link>
                    <Link to={routes.APOD.path}>APOD</Link>
                    <Link to={routes.MARS_ROVER.path}>Mars Rover</Link>
                    <Link to={routes.EARTH_IMAGERY.path}>Earth Imagery</Link>
                    <Link to={routes.NEO.path}>NEO</Link>
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
                </div>
            )}
        </div>
    );
};

export default Hamburger;
