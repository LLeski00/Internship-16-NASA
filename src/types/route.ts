type RouteData = {
    path: string;
    name: string;
    description: string;
    image: string;
    isMainRoute: boolean;
};

type Routes = {
    [key: string]: RouteData;
};

export { RouteData, Routes };
