import SearchBar from "../../../components/searchbar";
import { GrAnnounce } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
export default function Announcements() {
    return (
        <div>
            <div className="header flex items-center gap-2 justify-between">
                <div className="header flex items-center gap-2">
                    <GrAnnounce className="size-6 text-[#192a56]"></GrAnnounce>
                    <div className="text-xl font-emibold text-[#192a56]">Announcement</div>
                </div>
                <SearchBar placeHolder="Seach Announcement" ></SearchBar>
                <button className="flex w-22 items-center gap-2 justify-between border rounded-md shadow-xl text-white bg-[#40739e] !px-2 !py-1 cursor-pointer ">Add <IoMdAdd className="cursor-pointer size-5"></IoMdAdd></button>
            </div>
            <div className="line border border-[#192a56] rounded-full relative top-2"></div>
            <div className="relative top-4 flex flex-col gap-2">
                <div className="border h-15 rounded-sm border-[#192a56] bg-[#192a56] text-slate-50 !p-1">
                    Announcement
                </div>
                <div className="border h-15 rounded-sm border-[#192a56] bg-[#192a56] text-slate-50 !p-1">
                    Announcement
                </div>
                <div className="border h-15 rounded-sm border-[#192a56] bg-[#192a56] text-slate-50 !p-1">
                    Announcement
                </div>
                <div className="border h-15 rounded-sm border-[#192a56] bg-[#192a56] text-slate-50 !p-1">
                    Announcement
                </div>
                <div className="border h-15 rounded-sm border-[#192a56] bg-[#192a56] text-slate-50 !p-1">
                    Announcement
                </div>
                <div className="border h-15 rounded-sm border-[#dcdde1] bg-[#192a56] text-slate-50 !p-1">
                    Announcement
                </div>
            </div>
        </div>
    )
}