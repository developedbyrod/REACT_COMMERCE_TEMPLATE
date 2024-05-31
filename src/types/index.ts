export type credentialsProps = {
    user: {
        email: string;
        password: string;
        ip: string;
        token: string;
    }
}

export type AuthStateType = {
    isAuthenticated: boolean;
    user: credentialsProps | null;
    error: string | null;
    loading: boolean;
}

export type ActionType = {
    type: string;
    payload: any;
};

export type AuthDispatch = (value: ActionType) => void;


export type sliderProps = {
    slides: string[];
    autoPlay: boolean;
    interval: number;
    showArrows: boolean;
    showDots: boolean;
    showButton: boolean;
}

export type sliderButtonProps = {
    text: string;
    onClick: () => void;
}


// interfaces
export interface AuthContextProps {
    state: AuthStateType;
    dispatch: AuthDispatch;
    login: (credentials: credentialsProps) => Promise<void>;
}