import SearchBar from "../../../components/searchbar";
import Divider from "../../../components/divider";
import { IoMdAdd } from "react-icons/io";
import { PiExam } from "react-icons/pi";

export default function Quizes() {
    return (
        <div>
            <div className="header flex items-center gap-2 justify-between">
                <div className="header flex items-center gap-2">
                    <PiExam className="size-6 text-[#192a56]"></PiExam>
                    <div className="text-xl font-emibold text-[#192a56]">Quizzes</div>
                </div>
                <div className="flex">
                    <SearchBar placeHolder="Seach Quiz" ></SearchBar>
                    <button className="flex w-22 items-center gap-2 justify-between border rounded-md shadow-xl text-white bg-[#40739e] !px-2 !py-1 cursor-pointer ">Add <IoMdAdd className="cursor-pointer size-5"></IoMdAdd></button>
                </div>

            </div>
            <Divider></Divider>
        </div>

    )
}