import { useState } from "react";
import { HeaderDataProps } from "../../../types";
import { Link } from "react-router-dom";


export default function NavLinks(data: HeaderDataProps) {
    
    const [submenuHovered, setSubmenuHovered] = useState<boolean>(false);
    const [submenuActive, setSubmenuActive] = useState<number | null>(null);

    const handleSubmenu = (index: number) => {
        setSubmenuActive(index);
        setSubmenuHovered(true);
    }

    const handleSubmenuLeave = () => {

        if (submenuHovered === false) setSubmenuActive(null);

    }
    return (

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
    )
}