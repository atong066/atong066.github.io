import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { ImPrinter } from "react-icons/im";
import { TbListNumbers } from "react-icons/tb";
function DropDown(props: any) {
    return (
        <div className="border border-gray-500  rounded-md w-48">
            <div className="cursor-pointer  hover:bg-[#273c75] hover:text-slate-100 !px-2 !py-1 trasnsition-all flex items-center justify-between">
                <span>{props.placeholder}</span>
                <IoIosArrowDown></IoIosArrowDown>
            </div>
        </div>
    )
}
export default function Grades() {
    return (
        <div>
            <div className="header flex items-center gap-2">
                <TbListNumbers className="size-6 text-[#192a56]"></TbListNumbers>
                <div className="text-xl font-emibold text-[#192a56]">Student Grades</div>
            </div>
            <div className="line border border-[#192a56] rounded-full relative top-2"></div>
            <div className="relative top-2">
                <div className="filters flex gap-5 items-center !p-2">
                    <DropDown placeholder="Choose Grade Level"></DropDown>
                    <DropDown placeholder="Choose Section"></DropDown>
                    <DropDown placeholder="Choose Subject"></DropDown>
                    <div className="flex gap-2">
                        <button className="flex w-22 items-center gap-2 justify-between border rounded-lg shadow-xl text-white bg-[#40739e] !px-2 !py-1 cursor-pointer ">Filter <FaSearch className="cursor-pointer size-5"></FaSearch></button>
                        <button className="flex w-22 items-center gap-2 justify-between border rounded-lg shadow-xl text-white bg-[#c23616] !px-2 !py-1 cursor-pointer ">Print <ImPrinter className="cursor-pointer size-5"></ImPrinter></button>
                    </div>
                </div>
                <div>
                    <table className="border w-full rounded-md">
                        <thead className="border bg-[#273c75] text-slate-50 rounded-t-md !p-2">
                            <th>Name</th>
                            <th>Grade</th>
                            <th>Action</th>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}