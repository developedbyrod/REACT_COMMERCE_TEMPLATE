import { useState } from "react";
import { HeaderDataProps } from "../../../types";
import Searchbar from "../../Searchbar";
import NavbarIcons from "../NavbarIcons";
import Overlay from "../../Overlay";
import SiteLogo from "../../Logo";
import NavLinks from "../Navlinks";
import MobileNav from "../MobileNav";

export default function Header(data: HeaderDataProps) {
    let mobileMenuActive = false;
    return (
        <header className="flex items-center w-full px-5 py-6 shadow-md">
            <Overlay overlayActive={mobileMenuActive}/>
            <div className="hidden md:flex mx-auto md:flex-col items-center w-full">
                <div className="flex items-center w-full border-b-[0.5px] border-[#ccc] pb-5">
                    <div className="flex w-full justify-between items-center">
                        <SiteLogo
                            {...data.headerContent.logo}
                            className="w-[150px] max-w-[100%] object-contain"
                        />

                        <Searchbar
                            placeholder="Search products"
                        />

                        <NavbarIcons
                            {...data}
                        />
                    </div>
                </div>
                <NavLinks {...data}/>
            </div>
            <MobileNav {...data}/>
        </header>
    )
}