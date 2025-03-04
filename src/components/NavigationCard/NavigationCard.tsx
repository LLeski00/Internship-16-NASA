import { RouteData } from "@/types/route";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "@/components/NavigationCard/NavigationCard.css";

interface NavigationCardProps {
    data: RouteData;
}

const NavigationCard: FC<NavigationCardProps> = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(data.path)} className="navigation-card">
            <img
                src={data.image !== "" ? data.image : undefined}
                alt={data.name}
            />
            <h2>{data.name}</h2>
            <p>{data.description}</p>
        </div>
    );
};

export default NavigationCard;
