import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "@/components";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
