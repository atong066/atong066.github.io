import { FaFilter } from "react-icons/fa";
import { IoPersonAddSharp, IoSettingsOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { MdDelete, MdEdit, MdOutlineRemoveRedEye } from "react-icons/md";
import { FiPrinter } from "react-icons/fi";
interface props {
    onClick?: any
    label?: string
}

export default function AddButton({ onClick, label }: props) {

    return (
        <button onClick={onClick} className="bg-[#2980b9] shadow px-3 cursor-pointer py-1 text-[14px] text-white rounded-sm flex items-center gap-2 h-fit addBtn"><IoMdAdd ></IoMdAdd >{label ? label : <span>Add</span>}</button>
    )
}

export function FilterButton({ onClick }: props) {
    return (
        <button onClick={onClick} className="bg-[#2980b9] filter shadow px-3 cursor-pointer py-1 text-white rounded-sm flex items-center gap-2 h-fit addBtn"><FaFilter ></FaFilter ><span>Filter</span></button>
    )
}
export function CancelButton({ onClick }: any) {
    return (
        <button onClick={onClick} type={"button"} className="cursor-pointer max-[720px]:text-sm border px-2 py-1 rounded-sm bg-[#c0392b] text-white border-[#d35400] text-[14px]">Cancel</button>
    )
}
export function SaveButton({ onClick }: any) {
    return (
        <button onClick={onClick} type={"submit"} className="cursor-pointer max-[720px]:text-sm border px-2 py-1 rounded-sm bg-[#2980b9] text-white border-[#2980b9] text-[14px]">Save</button>
    )
}
export function ViewButton({ onClick }: any) {
    return (
        <button onClick={onClick} type={"submit"} className="max-[720px]:text-[12px] text-[15px] cursor-pointer max-[720px]:py-[.1rem] border px-[.7rem]  rounded-sm bg-[#16a085] text-white border-[#1abc9c]"><MdOutlineRemoveRedEye ></MdOutlineRemoveRedEye ></button>
    )
}
export function EditButton({ onClick }: any) {
    return (
        <button onClick={onClick} type={"submit"} className="max-[720px]:text-[12px] cursor-pointer max-[720px]:py-[.1rem] border px-2 py-1 rounded-sm bg-[#27ae60] text-white border-[#27ae60] shadow"><MdEdit /></button>
    )
}
export function DeleteButton({ onClick }: any) {
    return (
        <button onClick={onClick} type={"submit"} className="max-[720px]:text-[12px] cursor-pointer max-[720px]:py-[.1rem] border px-2 py-1 rounded-sm bg-[#c23408] text-white border-[#ae2727b6] shadow"><MdDelete /></button>
    )
}
export function ControllButton({ addAction, printAction, settingsAction }: any) {
    return (
        <div className="flex h-fit  border items-center rounded-sm justify-center border-slate-400 text-slate-600 shadow">
            <span onClick={addAction} className="border-r p-1 py-2 px-2 flex items-center justify-center border-slate-500 cursor-pointer"><IoMdAdd /></span>
            <span onClick={printAction} className="border-r p-1 py-2 px-2 flex items-center justify-center  border-slate-500 cursor-pointer"><FiPrinter /></span>
            <span onClick={settingsAction} className="p-1 flex px-2 py-2 items-center justify-center cursor-pointer"><IoSettingsOutline /></span>
        </div>
    )
}