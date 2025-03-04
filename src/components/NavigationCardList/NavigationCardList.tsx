import { routes } from "@/constants/routes";
import { NavigationCard } from "@/components";
import "@/components/NavigationCardList/NavigationCardList.css";

const NavigationCardList = () => {
    const navigationRoutes = Object.values(routes).filter(
        (route) => route.isMainRoute && route !== routes.HOME
    );

    return (
        <div className="navigation-card-list">
            {navigationRoutes.map((route) => (
                <NavigationCard key={route.name} data={route} />
            ))}
        </div>
    );
};

export default NavigationCardList;
