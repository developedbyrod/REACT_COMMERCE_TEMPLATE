import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const templateData = {
    products: [
        {
            id: 1,
            name: "Product 1",
            desc: "lorem ipsum",
            image: "lorem ipsum",
            variants: ["Black", "Red", "Green"]
        },
        {
            id: 2,
            name: "Product 1",
            desc: "lorem ipsum",
            image: "lorem ipsum",
            variants: ["Black", "Red", "Green"]
        },
        {
            id: 3,
            name: "Product 1",
            desc: "lorem ipsum",
            image: "lorem ipsum",
            variants: ["Black", "Red", "Green"]
        },
    ],
    headerContent: {
        logoImg: "Logo Here",
        socialIcons: [
            {
                name: "Facebook",
                link: "https://facebook.com"
            },
            {
                name: "Instagram",
                link: "https://instagram.com"
            },
            {
                name: "Twitter",
                link: "https://twitter.com"
            }
        ],
        navLinks: [
            {
                name: "Home",
                link: "/",
                sub_links: [
                    {
                        name: "Sublink 1",
                        link: "/sublink1"
                    },
                    {
                        name: "Sublink 2",
                        link: "/sublink2"
                    },
                    {
                        name: "Sublink 3",
                        link: "/sublink3"
                    },
                ]
            },
            {
                name: "Home",
                link: "/",
                sub_links: [
                    {
                        name: "Sublink 1",
                        link: "/sublink1"
                    },
                    {
                        name: "Sublink 2",
                        link: "/sublink2"
                    },
                    {
                        name: "Sublink 3",
                        link: "/sublink3"
                    },
                ]
            },
            {
                name: "Home",
                link: "/",
                sub_links: [
                    {
                        name: "Sublink 1",
                        link: "/sublink1"
                    },
                    {
                        name: "Sublink 2",
                        link: "/sublink2"
                    },
                    {
                        name: "Sublink 3",
                        link: "/sublink3"
                    },
                ]
            },
            {
                name: "Home",
                link: "/",
                sub_links: [
                    {
                        name: "Sublink 1",
                        link: "/sublink1"
                    },
                    {
                        name: "Sublink 2",
                        link: "/sublink2"
                    },
                    {
                        name: "Sublink 3",
                        link: "/sublink3"
                    },
                ]
            },
            {
                name: "Home",
                link: "/",
                sub_links: [
                    {
                        name: "Sublink 1",
                        link: "/sublink1"
                    },
                    {
                        name: "Sublink 2",
                        link: "/sublink2"
                    },
                    {
                        name: "Sublink 3",
                        link: "/sublink3"
                    },
                ]
            },
            {
                name: "Home",
                link: "/",
                sub_links: [
                    {
                        name: "Sublink 1",
                        link: "/sublink1"
                    },
                    {
                        name: "Sublink 2",
                        link: "/sublink2"
                    },
                    {
                        name: "Sublink 3",
                        link: "/sublink3"
                    },
                ]
            },
            {
                name: "Home",
                link: "/",
                sub_links: [
                    {
                        name: "Sublink 1",
                        link: "/sublink1"
                    },
                    {
                        name: "Sublink 2",
                        link: "/sublink2"
                    },
                    {
                        name: "Sublink 3",
                        link: "/sublink3"
                    },
                ]
            },
            {
                name: "Home",
                link: "/",
                sub_links: [
                    {
                        name: "Sublink 1",
                        link: "/sublink1"
                    },
                    {
                        name: "Sublink 2",
                        link: "/sublink2"
                    },
                    {
                        name: "Sublink 3",
                        link: "/sublink3"
                    },
                ]
            },
        ],
    }
}
export default function Navbar() {

    const [submenuActive, setSubmenuActive] = useState(null);
    const [submenuHovered, setSubmenuHovered] = useState(false);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);

    const handleSubmenu = (index) => {
        setSubmenuActive(index);
        setSubmenuHovered(true);
    }

    const handleSubmenuLeave = () => {

        if (submenuHovered === false) setSubmenuActive(null);

    }

    const handleMobileMenu = () => {
        setMobileMenuActive(!mobileMenuActive);
    }


    return (
        <header className="flex items-center w-full px-5 py-6 shadow-md">

            {/* OVERLAY */}
            <div
                className={`${mobileMenuActive ? 'absolute top-0 right-0 w-full h-full z-10 bg-[rgba(0,0,0,0.5)]' : 'hidden'}`}
                onClick={() => setMobileMenuActive(false)}
            ></div>


            <div className="hidden md:flex mx-auto md:flex-col items-center w-full">
            {submenuHovered && <div className="absolute z-5 w-full h-[100px] bg-transparent" onMouseEnter={() => {handleSubmenuLeave, setSubmenuHovered(false)}}></div>}
                <div className="flex items-center w-full border-b-[0.5px] border-[#ccc] pb-5">

                    <div className="flex w-full justify-between items-center">
                        <div className="flex w-full">
                            <h1 className="text-black text-2xl font-bold">{templateData.headerContent.logoImg}</h1>
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
                                {templateData.headerContent.socialIcons.map((socialIcon, index) => {
                                    let iconName;

                                    if (socialIcon.name === "Facebook") {
                                        iconName = "akar-icons:facebook-fill";
                                    } else if (socialIcon.name === "Instagram") {
                                        iconName = "akar-icons:instagram-fill";
                                    } else if (socialIcon.name === "Twitter") {
                                        iconName = "akar-icons:twitter-fill";
                                    }

                                    return (
                                        <Link key={index} to={socialIcon.link}>
                                            <Icon icon={iconName} fontSize={30} />
                                        </Link>
                                    );
                                    
                                })}

                            </div>
                        </div>

                    </div>
                </div>

                {/* Links e Sublinks */}
                
                <div className="flex w-full max-w-[800px] mx-auto jusitfy-center pt-7">
                    {templateData.headerContent.navLinks.map((navLink, index) => (
                        <div
                            className="container sublinks relative cursor-pointer flex items-center justify-center"
                            key={index}
                            onMouseEnter={() => handleSubmenu(index)}
                            onMouseLeave={handleSubmenuLeave}
                        >
                            <div className="flex">
                                <span className="cursor-pointer">{navLink.name}</span>
                            </div>

                            <div className={`sublinks_active p-4 bg-white ${submenuActive === index && submenuHovered === true ? 'flex-col absolute z-10 left-0 top-10 w-[300px] shadow-lg rounded-lg' : 'hidden'}`}
                                onMouseLeave={() => setSubmenuHovered(false)}>
                                <ul

                                >
                                    {navLink.sub_links.map((sublink, index) => (
                                        <li key={index}>
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
                    <h1>{templateData.headerContent.logoImg}</h1>
                </div>

                <div className="flex">
                    <input type="button" value="MENU" onClick={handleMobileMenu} />
                </div>
            </div>

            {/* OPEN MENU */}
            <div className={`${mobileMenuActive ? 'flex flex-col p-4 bg-white h-screen absolute top-0 right-0 z-20 w-[70vw]' : 'hidden'}`}>
                <nav>
                    <ul>
                        {templateData.headerContent.navLinks.map((navLink, index) => (
                            <li key={index}>
                                <Link to={navLink.link}>{navLink.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}