import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import astronautImage from "@/assets/images/astronaut.png";
import milkyWayImage from "@/assets/images/milky-way.jpeg";
import "./NotFoundPage.css";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found-page">
            <img
                className="milky-way-background"
                src={milkyWayImage}
                alt="milky-way"
            />
            <p>Woops! The page that you were looking for does not exist!</p>
            <img
                className="astronaut-image"
                src={astronautImage}
                alt="astronaut"
            />
            <Button onClick={() => navigate("/")} variant="contained">
                Go home
            </Button>
        </div>
    );
};

export default NotFoundPage;
