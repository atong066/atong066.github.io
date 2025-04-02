import { FaSearch } from "react-icons/fa";
interface props {
    placeHolder?: string
}
export default function SearchBar({ placeHolder }: props) {
    return (
        <div className="border border-slate-500 rounded-md flex items-center relative right-2">
            <input className="outline-none !px-2 !py-1 text-black-700" placeholder={placeHolder} type="text" />
            <FaSearch className="cursor-pointer size-4 relative right-2 text-slate-500"></FaSearch>
        </div>
    )
}