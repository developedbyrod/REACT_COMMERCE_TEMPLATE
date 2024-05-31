import { HeaderDataProps } from "../../../types";
import Searchbar from "../../Searchbar";
import NavbarIcons from "../NavbarIcons";
import SiteLogo from "../../Logo";
import NavContainer from "../NavContainer";
import { headerData } from "../../../constraints";

export default function Header(data: HeaderDataProps) {
    let mobileMenuActive = false;

    return (
        <NavContainer 
            headerContent={headerData} 
            mobileMenuActive={mobileMenuActive}
        >
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
        </NavContainer>
    )

}