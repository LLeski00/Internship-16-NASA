import { RouteData } from "@/constants/routes";
import { FC } from "react";

interface NavigationCardProps {
    data: RouteData;
}

const NavigationCard: FC<NavigationCardProps> = ({ data }) => {
    return (
        <div className="navigation-card">
            <img src={data.image} alt={data.name} />
            <h2>{data.name}</h2>
            <p>{data.description}</p>
        </div>
    );
};

export default NavigationCard;
