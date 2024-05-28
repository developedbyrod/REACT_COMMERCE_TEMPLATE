import { useState } from "react";
import { Link } from "react-router-dom";

const templateData = {

    website: {
        name: "E-Shop",
        desc: "lorem ipsum",
        logo: "logo here"
    },

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
        logoImg: "lorem ipsum",
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

    const handleSubmenu = (index) => {
        setSubmenuActive(index);
        setSubmenuHovered(true);
    }

    const handleSubmenuLeave = () => {

        if (submenuHovered === false) setSubmenuActive(null);

    }

    return (
        <header className="flex items-center w-full px-5 py-6 shadow-md mb-5">
            <div className="mx-auto flex-col items-center w-full">

                <div className="flex items-center w-full border-b-[0.5px] border-[#ccc] pb-5">

                    <div className="hidden md:flex md:w-full md:justify-between items-center">
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
                            icons
                        </div>

                    </div>

                    <div className="flex md:hidden jusitfy-between w-full">

                        <div className="flex logo_mobile flex-1">
                            <h1>{templateData.website.name}</h1>
                        </div>

                        <div className="flex text-green-400">
                            <button>Menu</button>
                        </div>
                    </div>
                </div>


                {/* Links e Sublinks */}

                <div className="flex w-full max-w-[800px] mx-auto jusitfy-center mt-6">
                   
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
                                
                                <div  className={`sublinks_active p-4 bg-white ${submenuActive === index && submenuHovered === true ? 'flex-col absolute left-0 top-10 w-[300px] shadow-lg' : 'hidden'}`}
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

        </header>
    )
}