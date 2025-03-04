type RouteData = {
    path: string;
    name: string;
    description: string;
    image: string;
};

type Routes = {
    [key: string]: RouteData;
};

export { RouteData, Routes };
