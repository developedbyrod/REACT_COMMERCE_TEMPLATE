import { SearchbarProps } from "../../types";

export default function Searchbar(data : SearchbarProps) {
    return (
            <div className="flex w-full">
                <input
                    type="search"
                    className="flex w-[700px] h-[45px] p-2 bg-white rounded-lg border-[#ccc] border-[0.5px]"
                    id=""
                    ref={data.ref}
                    placeholder={data.placeholder}
                />
            </div>
    )
}