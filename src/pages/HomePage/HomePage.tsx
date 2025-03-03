import { useTheme } from "@/hooks";

const HomePage = () => {
    const { toggleTheme } = useTheme();

    return (
        <div className="home-page">
            <button onClick={toggleTheme}>Switch theme</button>
        </div>
    );
};

export default HomePage;
