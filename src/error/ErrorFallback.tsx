import { Button } from "@mui/material";
import { FC } from "react";

interface ErrorFallbackProps {
    error: Error;
    resetErrorBoundary: () => void;
}

export const ErrorFallback: FC<ErrorFallbackProps> = ({
    error,
    resetErrorBoundary,
}) => {
    return (
        <div>
            <p>Error: {error.message}</p>
            <Button onClick={resetErrorBoundary}>Try again</Button>
        </div>
    );
};
