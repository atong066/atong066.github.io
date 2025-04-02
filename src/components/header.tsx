import { IoIosSearch } from "react-icons/io";

interface props {
    label: string,
    searchLabel?: string,
    enableSearch?: boolean
}
export default function Headers({ label, searchLabel, enableSearch }: props) {
    return (
        <div className="header border-b-2 border-slate-500 p-2 py-1 flex items-center justify-between w-full">
            <div className="text-2xl headerLabel">{label}</div>
            {enableSearch && <div>
                <div className="border border-slate-400 rounded-sm flex items-center pr-2 max-[720px]:text-xs max-[720px]:w-32">
                    <input className="outline-none w-full px-2 py-1" type="text" placeholder={searchLabel ? searchLabel : "Search Student"} />
                    <IoIosSearch className="cursor-pointer" size={"1.5rem"}></IoIosSearch></div>
            </div>}
        </div>
    )
}