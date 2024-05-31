export default function Overlay(overalayActive: any, setOverlayActive: any){
    return(
        <section className="overlay relative">
            <div
                className={`${overalayActive ? 'absolute top-0 right-0 w-full h-full z-10 bg-[rgba(0,0,0,0.5)]' : 'hidden'}`}
                onClick={() => setOverlayActive(false)}
            ></div>
        </section>
    )
}