import { routes } from "@/constants/routes";
import { NavigationCard } from "@/components";
import "@/components/NavigationCardList/NavigationCardList.css";

const NavigationCardList = () => {
    return (
        <div className="navigation-card-list">
            {Object.values(routes).map((route) => (
                <NavigationCard key={route.name} data={route} />
            ))}
        </div>
    );
};

export default NavigationCardList;
