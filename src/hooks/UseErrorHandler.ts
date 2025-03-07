import { useState } from "react";

interface ErrorHandlerReturn {
    error: Error | null;
    handleError: (error: Error) => void;
    reset: () => void;
}

export const useErrorHandler = (): ErrorHandlerReturn => {
    const [error, setError] = useState<Error | null>(null);

    const handleError = (err: Error) => {
        console.log("Caught error in handler: ", err);
        setError(err);
    };

    const reset = () => {
        setError(null);
    };

    return { error, handleError, reset };
};
