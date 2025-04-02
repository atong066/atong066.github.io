import SearchBar from "../../../components/searchbar";
import Divider from "../../../components/divider";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineAnnouncement } from "react-icons/md";

export default function Activities() {
    return (
        <div>
            <div className="header flex items-center gap-2 justify-between">
                <div className="header flex items-center gap-2">
                    <MdOutlineAnnouncement className="size-6 text-[#192a56]"></MdOutlineAnnouncement>
                    <div className="text-xl font-emibold text-[#192a56]">Activities</div>
                </div>
                <div className="flex">
                    <SearchBar placeHolder="Seach Activity" ></SearchBar>
                    <button className="flex w-22 items-center gap-2 justify-between border rounded-md shadow-xl text-white bg-[#40739e] !px-2 !py-1 cursor-pointer ">Add <IoMdAdd className="cursor-pointer size-5"></IoMdAdd></button>
                </div>

            </div>
            <Divider></Divider>
        </div>

    )
}