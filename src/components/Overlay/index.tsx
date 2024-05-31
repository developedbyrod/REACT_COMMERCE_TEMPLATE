import { OverlayProps } from "../../types";

export default function Overlay({overlayActive, onClick} : OverlayProps){
    return(
        <section className="overlay relative" onClick={onClick}>
            <div
                className={`${overlayActive ? 'fixed top-0 right-0 w-full h-full z-10 bg-[rgba(0,0,0,0.5)]' : 'hidden'}`}
            ></div>
        </section>
    )
}