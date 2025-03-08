import { PageObjectDetails } from "@/components";
import { routes } from "@/constants/routes";
import { useErrorHandler } from "@/hooks";
import { RouteData } from "@/types/route";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
    const { name } = useParams<{ name: string }>();
    const [pageObject, setPageObject] = useState<RouteData>();
    const { error, handleError } = useErrorHandler();

    useEffect(() => {
        loadPageObject();
    }, []);

    async function loadPageObject() {
        if (name === undefined)
            handleError(
                new Error("The page object name in the URL is undefined")
            );

        const selectedPageObject: RouteData | undefined = Object.values(
            routes
        ).find((route) => route.path === `/${name}` && route.isMainRoute);
        if (!selectedPageObject)
            handleError(
                new Error("The page object name in the URL is invalid")
            );

        setPageObject(selectedPageObject);
    }

    return (
        <div className="details-page">
            {pageObject && <PageObjectDetails pageObject={pageObject} />}
            {error && <p className="error-message">{error.message}</p>}
        </div>
    );
};

export default DetailsPage;
