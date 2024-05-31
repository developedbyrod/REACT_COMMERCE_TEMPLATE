export type sliderProps = {
    slides: { url: string; link: string; }[];
    autoPlay: boolean;
    interval: number;
    showArrows: boolean;
    showDots: boolean;
    showButton: boolean;
    showLink: boolean; 
    width: string;
  }
export type sliderButtonProps = {
    text: string;
    onClick: () => void;
}

export type credentialsProps = {
    user: {
        email: string;
        password: string;
        ip: string;
        token: string;
    }
}

export type HeaderDataProps = {
    headerContent: {
        logoImg: string;
        socialIcons: { name: string; link: string }[];
        navLinks: {
            name: string;
            link: string;
            sub_links: { name: string; link: string }[];
        }[];
    };
};

export type AuthStateType = {
    isAuthenticated: boolean;
    user: credentialsProps | null;
    error: string | null;
    loading: boolean;
}
export type ProductType = {
    id: number;
    name: string;
    price: number;
    desc: string;
    category: string;
    image: string;
    quantity: number;
    variants: string[];

}

export type CartStateType = {
    cart: ProductType[] | [];
    total: number;
}

export type ActionType = {
    type: string;
    payload: any;
};

export type AuthDispatch = (value: ActionType) => void;


// interfaces
export interface AuthContextProps {
    state: AuthStateType;
    dispatch: AuthDispatch;
    login: (credentials: credentialsProps) => Promise<void>;
}