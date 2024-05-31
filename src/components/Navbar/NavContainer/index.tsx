import React from "react";
import { HeaderDataProps } from "../../../types";
import Overlay from "../../Overlay";
import MobileNav from "../MobileNav";
import NavLinks from "../Navlinks";


interface NavContainerProps {
    headerContent: HeaderDataProps;
    children?: React.ReactNode;
    mobileMenuActive: boolean;

}

export default function NavContainer({headerContent, children, mobileMenuActive}: NavContainerProps) {

    return (
        <header className="flex items-center w-full px-5 py-6 shadow-md">
            <Overlay overlayActive={mobileMenuActive}/>
            <div className="hidden md:flex mx-auto md:flex-col items-center w-full">
                <div className="flex items-center w-full border-b-[0.5px] border-[#ccc] pb-5">
                    <div className="flex w-full justify-between items-center">
                            {children}
                    </div>
                </div>
                <NavLinks {...headerContent}/>
            </div>
            <MobileNav {...headerContent}/>
        </header>

    )
}