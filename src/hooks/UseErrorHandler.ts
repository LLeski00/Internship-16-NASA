import { useState } from "react";

interface ErrorHandlerReturn {
    error: Error | null;
    handleError: (error: Error) => void;
    resetError: () => void;
}

export const useErrorHandler = (): ErrorHandlerReturn => {
    const [error, setError] = useState<Error | null>(null);

    const handleError = (err: Error) => {
        console.log("Caught error in handler: ", err);
        setError(err);
    };

    const resetError = () => {
        setError(null);
    };

    return { error, handleError, resetError };
};
