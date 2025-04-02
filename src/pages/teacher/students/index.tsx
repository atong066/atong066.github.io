import { GrFormNextLink } from "react-icons/gr";
import Divider from "../../../components/divider";
import { FaHome, FaSearch } from "react-icons/fa";
import DropDown from "../../../components/dropdown";
import { ImPrinter } from "react-icons/im";
export default function StudentList() {
    const tableHeader = ["Lastname", "Firstname", "Middlename", "Year", "Section", "Age", "Date of Birth", "Status", "Action"]
    const data = [{
        Lastname: "Galicia", Firstname: "Virgilio", Middlename: "Sales", Year: "Sales", Section: "Sales", Age: "Sales", DateofBirth: "Sales", Status: "Sales", Action: "Sales"
    }, {
        Lastname: "Galicia", Firstname: "Virgilio", Middlename: "Sales", Year: "Sales", Section: "Sales", Age: "Sales", DateofBirth: "Sales", Status: "Sales", Action: "Sales"
    }, {
        Lastname: "Galicia", Firstname: "Virgilio", Middlename: "Sales", Year: "Sales", Section: "Sales", Age: "Sales", DateofBirth: "Sales", Status: "Sales", Action: "Sales"
    }, {
        Lastname: "Galicia", Firstname: "Virgilio", Middlename: "Sales", Year: "Sales", Section: "Sales", Age: "Sales", DateofBirth: "Sales", Status: "Sales", Action: "Sales"
    }, {
        Lastname: "Galicia", Firstname: "Virgilio", Middlename: "Sales", Year: "Sales", Section: "Sales", Age: "Sales", DateofBirth: "Sales", Status: "Sales", Action: "Sales"
    }, {
        Lastname: "Galicia", Firstname: "Virgilio", Middlename: "Sales", Year: "Sales", Section: "Sales", Age: "Sales", DateofBirth: "Sales", Status: "Sales", Action: "Sales"
    }, {
        Lastname: "Galicia", Firstname: "Virgilio", Middlename: "Sales", Year: "Sales", Section: "Sales", Age: "Sales", DateofBirth: "Sales", Status: "Sales", Action: "Sales"
    }, {
        Lastname: "Galicia", Firstname: "Virgilio", Middlename: "Sales", Year: "Sales", Section: "Sales", Age: "Sales", DateofBirth: "Sales", Status: "Sales", Action: "Sales"
    }, {
        Lastname: "Galicia", Firstname: "Virgilio", Middlename: "Sales", Year: "Sales", Section: "Sales", Age: "Sales", DateofBirth: "Sales", Status: "Sales", Action: "Sales"
    }]
    return (
        <div >
            <div className="header flex items-center gap-2 justify-between">
                <div className="header flex items-center gap-2">
                    <FaHome className="size-6 text-[#192a56]"></FaHome>
                    <div className="text-xl font-emibold text-[#192a56]">Student</div>
                </div>
            </div>
            <Divider></Divider>
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
            </div>
            <div className="grid grid-cols-9 bg-[#273c75] text-slate-200  relative top-2 rounded-t-sm text-center">
                {
                    tableHeader.map((value, index) => (
                        <div key={index} className="!p-2 ">{value}</div>
                    ))
                }
            </div>
            <div>
                {
                    data.map((value: any, index: number) => (
                        <div key={index} className="grid grid-cols-9   text-center  even:bg-slate-200">
                            <div className="!p-2">{value.Lastname} </div>
                            <div className="!p-2">{value.Firstname} </div>
                            <div className="!p-2">{value.Middlename} </div>
                            <div className="!p-2">{value.Year} </div>
                            <div className="!p-2">{value.Section} </div>
                            <div className="!p-2">{value.Age} </div>
                            <div className="!p-2">{value.DateofBirth} </div>
                            <div className="!p-2">{value.Status} </div>
                            <div className="!p-2">{value.Action} </div>
                        </div>

                    ))
                }
                <div className="flex gap-2 justify-end !pr-4 !pt-2 items-center text-lg">
                    <GrFormNextLink className="rotate-[180deg] cursor-pointer"></GrFormNextLink>
                    <div className="cursor-pointer border size-5 flex items-center justify-center bg-[#273c75] text-slate-100 !p-1">1</div>
                    <div className="cursor-pointer">2</div>
                    <div className="cursor-pointer">3</div>
                    <div className="cursor-pointer">4</div>
                    <div className="cursor-pointer">. . .</div>
                    <div className="cursor-pointer">9</div>
                    <div className="cursor-pointer">10</div>
                    <GrFormNextLink className="cursor-pointer"></GrFormNextLink>

                </div>
            </div>
        </div>
    )
}