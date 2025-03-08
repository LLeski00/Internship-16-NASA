import { ApodGallery, DateFilter } from "@/components";
import "./ApodGalleryPage.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { DateFilterType } from "@/types";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/error/ErrorFallback";

const ApodGalleryPage = () => {
    const [dateFilter, setDateFilter] = useState<DateFilterType>();

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
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <ApodGallery dateFilter={dateFilter} />
            </ErrorBoundary>
        </div>
    );
};

export default ApodGalleryPage;
