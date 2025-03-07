import { ComponentType, FC } from "react";
import "./WithLoading.css";

export function withLoading<T extends { isLoading: boolean }>(
    WrappedComponent: ComponentType<T>
) {
    const WithLoadingComponent: FC<T> = (props) => {
        return (
            <>
                <WrappedComponent {...props} />
                {props.isLoading && <div className="loading-spinner"></div>}
            </>
        );
    };

    return WithLoadingComponent;
}
