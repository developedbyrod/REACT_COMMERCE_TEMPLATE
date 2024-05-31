import { HeaderDataProps } from "../../../types";

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function NavbarIcons(data : HeaderDataProps) {
    return (
        <div className="flex w-full justify-end">
            <div className="flex gap-5">
                {data.headerContent.socialIcons.map((socialIcon: any, index: number) => {
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

    )
}