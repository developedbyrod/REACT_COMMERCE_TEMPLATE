import { useState } from "react";
import { HeaderDataProps } from "../../../types";
import { Link } from "react-router-dom";
import Overlay from "../../Overlay";
import Logo from "../../Logo";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function MobileNav(data: HeaderDataProps) {
    const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false);

    return (
        <>
            <div className="relative">
                <Overlay
                    overlayActive={mobileMenuActive}
                    onClick={() => setMobileMenuActive(false)}
                    className="w-[400px]"
                />
            </div>

            <div className="flex md:hidden justify-between items-center w-full relative">
                <div className="logoMobile flex">
                    <Logo {...data.headerContent.logo} className="max-w-[100px] mt-[-5px]"/>
                </div>

                <div className="flex">
                    <button type="button" onClick={() => setMobileMenuActive(true)}>
                        <Icon icon="mingcute:menu-fill" fontSize={30}  className="flex text-black hover:text-green-500"/>
                    </button>
                </div>
            </div>

            {/* OPEN MENU */}
            <div className={`${mobileMenuActive ? 'flex flex-col p-4 bg-white h-screen absolute top-0 right-0 z-20 w-[70vw]' : 'hidden'}`}>
                <nav>
                    <ul className="flex flex-col gap-5 items-center">
                        <div className="mt-5 mb-10">
                            <Logo {...data.headerContent.logo}/>
                        </div>
                        {data.headerContent.navLinks.map((navLink, index) => (
                            <li key={index} className="flex">
                                <Link to={navLink.link}>{navLink.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}