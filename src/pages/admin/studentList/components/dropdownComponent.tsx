import { IoIosArrowDown } from "react-icons/io"

interface props {
    label: string,
    placeholder: string,
    children?: any,
    state?: boolean,
    onClick?: any
}
export default function DropDown({ label, placeholder, children, state, onClick }: props) {
    return (
        <div className="relative z-0 flex flex-col">
            <span className="max-[720px]:text-[15px] font-semibold">{label}</span>
            <select name="" id="" className="border p-2 rounded-sm min-w-[13rem] text-slate-400 outline-none">
                <option value="" selected disabled>{placeholder}</option>
                {children}
            </select>
        </div>
    )
}