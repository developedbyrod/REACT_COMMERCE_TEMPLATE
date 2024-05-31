import { Link } from "react-router-dom";
import { SiteLogoProps } from "../../types";


export default function Logo({ url, image, width, height, maxWidth, maxHeight, display, className }: SiteLogoProps) {
    return (
        <div className="flex w-full">
            <Link to={url || ""} className="flex w-full">
                <img
                    className={className}
                    style={{
                        width: width,
                        height: height,
                        maxWidth: maxWidth,
                        maxHeight: maxHeight,
                        display: display
                    }}
                    src={image}
                    alt="Logo"
                />
            </Link>
        </div>
    )

}