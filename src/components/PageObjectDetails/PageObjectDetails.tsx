import { RouteData } from "@/types/route";
import { FC } from "react";
import { Link } from "react-router-dom";

interface PageObjectDetailsProps {
    pageObject: RouteData;
}

const PageObjectDetails: FC<PageObjectDetailsProps> = ({ pageObject }) => {
    return (
        <div className="page-object-details">
            <h1>{pageObject.name}</h1>
            <img src={pageObject.image} alt={pageObject.name} />
            <p>{pageObject.description}</p>
            <Link to={pageObject.path}>Open page</Link>
        </div>
    );
};

export default PageObjectDetails;
