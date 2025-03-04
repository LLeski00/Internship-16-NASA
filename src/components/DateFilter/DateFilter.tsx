import { Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { FC, useRef } from "react";
import "./DateFilter.css";

interface DateFilterProps {
    setDateFilter: Function;
}

const DateFilter: FC<DateFilterProps> = ({ setDateFilter }) => {
    const startDate = useRef<Dayjs>(dayjs());
    const endDate = useRef<Dayjs>(dayjs());

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

        if (startDate.current > endDate.current) {
            console.log("The start should be before the end date");
            return;
        }

        const newDateFilter = {
            startDate: startDate.current.toDate(),
            endDate: endDate.current.toDate(),
        };

        setDateFilter(newDateFilter);
    }

    return (
        <form className="date-filter" onSubmit={(e) => handleFormSubmit(e)}>
            <DatePicker
                label="Start Date"
                value={startDate.current}
                onChange={handleStartDate}
            />
            <DatePicker
                label="End Date"
                value={endDate.current}
                onChange={handleEndDate}
            />
            <Button type="submit" variant="contained">
                Filter
            </Button>
        </form>
    );
};

export default DateFilter;
