// import { SetStateAction } from "react";

export interface IAuthProps<T> {
    title: string;
    buttonText: string;
    navigateActionText: string;
    navigateScreen: string;
    // setDetails?: React.Dispatch<SetStateAction<T>>; 
    buttonActionText?: string;
    handleAuthAction?: () => void;
    handleInputChange?: () => void ;
}
