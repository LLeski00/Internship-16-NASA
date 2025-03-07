import { useMarsRover } from "@/hooks/UseMarsRover";
import { RoverImageData } from "@/types/mars";
import { Button } from "@mui/material";
import { FC } from "react";
import "./MarsRoverPhotosPagination.css";

interface MarsRoverPhotosPaginationProps {
    images: RoverImageData[];
}

const MarsRoverPhotosPagination: FC<MarsRoverPhotosPaginationProps> = ({
    images,
}) => {
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
            <Button
                onClick={() => handlePageChange("-")}
                disabled={roverFilter.page <= 1}
                variant="contained"
            >
                {"<-"}
            </Button>
            <p>Page: {roverFilter.page}</p>
            <Button
                onClick={() => handlePageChange("+")}
                disabled={images.length === 0}
                variant="contained"
            >
                {"->"}
            </Button>
        </div>
    );
};

export default MarsRoverPhotosPagination;
