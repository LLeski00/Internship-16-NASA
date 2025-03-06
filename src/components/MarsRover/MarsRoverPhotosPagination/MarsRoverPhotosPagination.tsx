import { useMarsRover } from "@/hooks/UseMarsRover";
import { Button } from "@mui/material";

const MarsRoverPhotosPagination = () => {
    const { roverFilter, setRoverFilter } = useMarsRover();

    function handlePageChange(direction: string) {
        const currentPage = roverFilter.page;
        if (direction === "-" && currentPage <= 1) return;
        setRoverFilter({
            ...roverFilter,
            page: direction === "+" ? currentPage + 1 : currentPage - 1,
        });
    }

    return (
        <div className="mars-rover-photos-pagination">
            <Button onClick={() => handlePageChange("-")}>{"<-"}</Button>
            <p>Page: {roverFilter.page}</p>
            <Button onClick={() => handlePageChange("+")}>{"->"}</Button>
        </div>
    );
};

export default MarsRoverPhotosPagination;
