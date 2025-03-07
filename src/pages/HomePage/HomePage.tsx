import { NavigationCardList, SolarSystemAnimation } from "@/components";
import { useTheme } from "@/hooks";
import "./HomePage.css";
import milkyWayImage from "@/assets/images/milky-way.jpeg";

const HomePage = () => {
    const { toggleTheme } = useTheme();

    return (
        <div className="home-page">
            <img
                className="milky-way-background"
                src={milkyWayImage}
                alt="milky-way"
            />
            <SolarSystemAnimation />
            <p>
                Embark on an exciting journey through space with NASA Explorer,
                an interactive application that brings the wonders of the
                universe to your fingertips. With access to NASA's vast
                collection of data, you can explore stunning images from the
                Astronomy Picture of the Day (APOD), view the latest photos
                captured by Mars rovers, track near-Earth objects (NEOs), and
                even explore our planet through satellite imagery. <br /> <br />
                Discover space missions, learn about distant planets and
                galaxies, and keep up-to-date with the latest space discoveries.
                Whether you're a space enthusiast or just curious about the
                cosmos, NASA Explorer has something for everyone. <br /> <br />
                Explore, learn, and be inspired by the beauty and mystery of our
                universe!
            </p>
            <button onClick={toggleTheme}>Toggle theme</button>
            <NavigationCardList />
        </div>
    );
};

export default HomePage;
