import "./SolarSystemAnimation.css";
import sunImage from "@/assets/images/sun.png";
import mercuryImage from "@/assets/images/mercury.png";
import venusImage from "@/assets/images/venus.png";
import earthImage from "@/assets/images/earth.png";
import marsImage from "@/assets/images/mars.png";
import jupiterImage from "@/assets/images/jupiter.png";
import saturnImage from "@/assets/images/saturn.png";
import uranusImage from "@/assets/images/uranus.png";
import neptuneImage from "@/assets/images/neptune.png";

const SolarSystemAnimation = () => {
    return (
        <div className="solar-system-animation">
            <img className="sun-image" src={sunImage} alt="sun" />
            <img
                className="planet mercury-image"
                src={mercuryImage}
                alt="mercury"
            />
            <img className="planet venus-image" src={venusImage} alt="venus" />
            <img className="planet earth-image" src={earthImage} alt="earth" />
            <img className="planet mars-image" src={marsImage} alt="mars" />
            <img
                className="planet jupiter-image"
                src={jupiterImage}
                alt="jupiter"
            />
            <img
                className="planet saturn-image"
                src={saturnImage}
                alt="saturn"
            />
            <img
                className="planet uranus-image"
                src={uranusImage}
                alt="uranus"
            />
            <img
                className="planet neptune-image"
                src={neptuneImage}
                alt="neptune"
            />
        </div>
    );
};

export default SolarSystemAnimation;
