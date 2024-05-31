import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderDataProps } from "../../types";

export default function Navbar(data : HeaderDataProps) {

    const [submenuActive, setSubmenuActive] = useState<number | null>(null);
    const [submenuHovered, setSubmenuHovered] = useState<boolean>(false);
    const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false);

    const handleSubmenu = (index: number) => {
        setSubmenuActive(index);
        setSubmenuHovered(true);
    }

    const handleSubmenuLeave = () => {

        if (submenuHovered === false) setSubmenuActive(null);

    }

    const handleMobileMenu = () => {
        setMobileMenuActive(!mobileMenuActive);
    }
    console.log(data)


    return (
        <header className="flex items-center w-full px-5 py-6 shadow-md">

            {/* OVERLAY */}
            <div
                className={`${mobileMenuActive ? 'absolute top-0 right-0 w-full h-full z-10 bg-[rgba(0,0,0,0.5)]' : 'hidden'}`}
                onClick={() => setMobileMenuActive(false)}
            ></div>


            <div className="hidden md:flex mx-auto md:flex-col items-center w-full">
                {submenuHovered && <div className="absolute z-5 w-full h-[100px] bg-transparent" onMouseEnter={() => { setSubmenuHovered(false) }}></div>}
                <div className="flex items-center w-full border-b-[0.5px] border-[#ccc] pb-5">

                    <div className="flex w-full justify-between items-center">
                        <div className="flex w-full">
                            <h1 className="text-black text-2xl font-bold">{data.headerContent.logoImg}</h1>
                        </div>


                        <div className="flex w-full">
                            <input
                                type="search"
                                className="flex w-[700px] h-[45px] p-2 bg-white rounded-lg border-[#ccc] border-[0.5px]"
                                id=""
                                placeholder="Search for products"
                            />
                        </div>


                        <div className="flex w-full justify-end">
                            <div className="flex gap-5">
                                {data.headerContent.socialIcons.map((socialIcon, index) => {
                                    let iconName;
                                    let onClickFn;

                                    if (socialIcon.name === "account") {
                                        iconName = "mingcute:shopping-bag-3-fill";
                                        // onClickFn = handleCart();

                                    } else if (socialIcon.name === "wish") {
                                        iconName = "ic:sharp-account-circle";
                                    } else if (socialIcon.name === "bag") {
                                        iconName = "akar-icons:twitter-fill";

                                    }

                                    return (
                                        <Link key={index} onClick={onClickFn} to={socialIcon.link} className="hover:text-green-600">
                                            <Icon icon={iconName || ""} fontSize={30} />
                                        </Link>
                                    );

                                })}

                            </div>
                        </div>

                    </div>
                </div>

                {/* Links e Sublinks */}

                <div className="flex w-full max-w-[800px] mx-auto jusitfy-center pt-7">
                    {data.headerContent.navLinks.map((navLink, index) => (
                        <div
                            className="container sublinks relative cursor-pointer flex items-center justify-center"
                            key={index}
                            onMouseEnter={() => handleSubmenu(index)}
                            onMouseLeave={handleSubmenuLeave}
                        >
                            <div className="flex">
                                <span className="cursor-pointer">{navLink.name}</span>
                            </div>

                            <div className={`sublinks_active p-2 bg-white ${submenuActive === index && submenuHovered === true ? 'flex-col absolute z-10 left-0 top-10 w-[300px] shadow-lg rounded-lg' : 'hidden'}`}
                                onMouseLeave={() => setSubmenuHovered(false)}>
                                <ul

                                >
                                    {navLink.sub_links.map((sublink, index) => (
                                        <li key={index} className="my-6 pl-6">
                                            <Link to={sublink.link} className="relative">
                                                {sublink.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex md:hidden justify-between items-center w-full relative">
                <div className="logoMobile flex">
                    <h1>{data.headerContent.logoImg}</h1>
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