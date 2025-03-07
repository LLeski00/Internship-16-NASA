import PageObjectDetails from "@/components/PageObjectDetails/PageObjectDetails";
import { routes } from "@/constants/routes";
import { RouteData } from "@/types/route";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
    const { name } = useParams<{ name: string }>();
    const [pageObject, setPageObject] = useState<RouteData>();

    useEffect(() => {
        loadPageObject();
    }, []);

    async function loadPageObject() {
        if (name === undefined)
            throw new Error("The page object name in the URL is undefined");

        const selectedPageObject: RouteData | undefined = Object.values(
            routes
        ).find((route) => route.path === `/${name}` && route.isMainRoute);
        if (!selectedPageObject)
            throw new Error("The page object name in the URL is invalid");

        setPageObject(selectedPageObject);
    }

    return (
        <div className="details-page">
            {pageObject && <PageObjectDetails pageObject={pageObject} />}
        </div>
    );
};

export default DetailsPage;
