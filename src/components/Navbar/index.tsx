import { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderDataProps } from "../../types";
import Searchbar from "../Searchbar";
import Overlay from "../Overlay";
import NavbarIcons from "./NavbarIcons";
import NavLinks from "./Navlinks";

export default function Navbar(data: HeaderDataProps) {

    const [submenuHovered, setSubmenuHovered] = useState<boolean>(false);
    const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false);


    const handleMobileMenu = () => {
        setMobileMenuActive(!mobileMenuActive);
    }
    console.log(data)


    return (
        <header className="flex items-center w-full px-5 py-6 shadow-md">
            
            <div className="hidden md:flex mx-auto md:flex-col items-center w-full">
                {
                    submenuHovered && <div className="absolute z-5 w-full h-[100px] bg-transparent"
                        onMouseEnter={() => { setSubmenuHovered(false) }}
                    >
                    </div>}

                <div className="flex items-center w-full border-b-[0.5px] border-[#ccc] pb-5">

                    <div className="flex w-full justify-between items-center">

                        <Searchbar placeholder="Search products" value="" />

                        <NavbarIcons {...data} />

                    </div>
                </div>

                {/* Links e Sublinks */}

                <NavLinks {...data} />

            </div>

            <div className="flex md:hidden justify-between items-center w-full relative">
                <div className="logoMobile flex">
                    <h1>{data.headerContent.logo.image}</h1>
                </div>

                <div className="flex">
                    <input type="button" value="MENU" onClick={handleMobileMenu} />
                </div>
            </div>

            {/* OPEN MENU */}
            <div className={`${mobileMenuActive ? 'flex flex-col p-4 bg-white h-screen absolute top-0 right-0 z-20 w-[70vw]' : 'hidden'}`}>
                <nav>
                    <ul className="flex flex-col gap-5 items-center">
                        {data.headerContent.navLinks.map((navLink, index) => (
                            <li key={index} className="flex">
                                <Link to={navLink.link}>{navLink.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}