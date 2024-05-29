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
