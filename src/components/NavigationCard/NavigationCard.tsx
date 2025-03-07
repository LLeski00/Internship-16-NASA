import { RouteData } from "@/types/route";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "@/components/NavigationCard/NavigationCard.css";
import { routes } from "@/constants/routes";

interface NavigationCardProps {
    data: RouteData;
}

const NavigationCard: FC<NavigationCardProps> = ({ data }) => {
    const navigate = useNavigate();
    const detailsUrl = routes.DETAILS.path.split(":")[0];
    const objectPath = data.path.slice(1);

    return (
        <div
            onClick={() => navigate(`${detailsUrl}${objectPath}`)}
            className="navigation-card"
        >
            {data.image ? (
                <img src={data.image} alt={data.name} />
            ) : (
                <p>Image not found.</p>
            )}
            <h2>{data.name}</h2>
            <p>{data.description}</p>
        </div>
    );
};

export default NavigationCard;
