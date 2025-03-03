import { routes } from "@/constants/routes";
import NavigationCard from "../NavigationCard/NavigationCard";

const NavigationCardList = () => {
    return (
        <div className="navigation-card-list">
            {Object.values(routes).map((route) => (
                <NavigationCard data={route} />
            ))}
        </div>
    );
};

export default NavigationCardList;
