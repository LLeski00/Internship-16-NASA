import { ApodGallery, DateFilter } from "@/components";
import "./ApodGalleryPage.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import { DateFilterType } from "@/types/filter";

const ApodGalleryPage = () => {
    const [dateFilter, setDateFilter] = useState<DateFilterType>();

    useEffect(() => {
        console.log(dateFilter);
    }, [dateFilter]);

    return (
        <div className="apod-gallery-page">
            <h1>Astronomy Picture of the Day (APOD) Gallery</h1>
            <p>
                Discover the cosmos! Each day a different image or photograph of
                our fascinating universe is featured, along with a brief
                explanation written by a professional astronomer.
            </p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateFilter setDateFilter={setDateFilter} />
            </LocalizationProvider>
            <ApodGallery dateFilter={dateFilter} />
        </div>
    );
};

export default ApodGalleryPage;
