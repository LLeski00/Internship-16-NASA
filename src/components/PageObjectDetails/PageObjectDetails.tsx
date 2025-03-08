import { RouteData } from "@/types";
import { FC } from "react";
import { Link } from "react-router-dom";
import "./PageObjectDetails.css";
import { useTheme } from "@/hooks";

interface PageObjectDetailsProps {
    pageObject: RouteData;
}

const PageObjectDetails: FC<PageObjectDetailsProps> = ({ pageObject }) => {
    const { isDarkTheme } = useTheme();

    return (
        <div className="page-object-details">
            <img src={pageObject.image} alt={pageObject.name} />
            <div className="page-object-details-content">
                <h1
                    style={{
                        color: isDarkTheme ? "white" : "var(--nasa-blue-color)",
                    }}
                >
                    {pageObject.name}
                </h1>
                <article>
                    <p>{pageObject.description}</p>
                    <br />
                    <p>{pageObject.summary}</p>
                </article>
                <Link to={pageObject.path}>Open page</Link>
            </div>
        </div>
    );
};

export default PageObjectDetails;
