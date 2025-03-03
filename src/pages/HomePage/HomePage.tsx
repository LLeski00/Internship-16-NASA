import NavigationCardList from "@/components/NavigationCardList/NavigationCardList";
import { useTheme } from "@/hooks";

const HomePage = () => {
    const { toggleTheme } = useTheme();

    return (
        <div className="home-page">
            <button onClick={toggleTheme}>Switch theme</button>
            <NavigationCardList />
        </div>
    );
};

export default HomePage;
