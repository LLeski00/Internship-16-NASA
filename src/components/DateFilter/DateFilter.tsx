import { Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { FC, useRef, useState } from "react";
import "./DateFilter.css";

interface DateFilterProps {
    setDateFilter: Function;
}

const DateFilter: FC<DateFilterProps> = ({ setDateFilter }) => {
    const startDate = useRef<Dayjs>(dayjs());
    const endDate = useRef<Dayjs>(dayjs());
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    function handleStartDate(newValue: Dayjs | null) {
        if (!newValue) return;
        startDate.current = newValue;
    }

    function handleEndDate(newValue: Dayjs | null) {
        if (!newValue) return;
        endDate.current = newValue;
    }

    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const error = checkError();
        setErrorMessage(null);
        const newDateFilter = {
            startDate: startDate.current.toDate(),
            endDate: endDate.current.toDate(),
        };
        setDateFilter(newDateFilter);
    }

    function checkError() {
        if (startDate.current > endDate.current)
            return "The end date must be greater than the start date";
        return null;
    }

    return (
        <>
            <form className="date-filter" onSubmit={(e) => handleFormSubmit(e)}>
                <DatePicker
                    label="Start Date"
                    value={startDate.current}
                    onChange={handleStartDate}
                    maxDate={dayjs()}
                />
                <DatePicker
                    label="End Date"
                    value={endDate.current}
                    onChange={handleEndDate}
                    maxDate={dayjs()}
                />
                <Button type="submit" variant="contained">
                    Filter
                </Button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </>
    );
};

export default DateFilter;
