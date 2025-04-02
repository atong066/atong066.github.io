import { FiHome } from "react-icons/fi";
import SidebarMenu from "./sidebarMenu";
import { PiStudentBold } from "react-icons/pi";
import { AiOutlineSchedule } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { MdOutlineForum } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdOutlineAnnouncement } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
export default function Sidebar() {
    return (
        <div className="sidebar sticky top-5 shadow-2xl">
            <SidebarMenu to={"/"} label="Home" icon={<FiHome />}></SidebarMenu>
            <SidebarMenu to={"/studentlist"} label="Students" icon={<PiStudentBold />}></SidebarMenu>
            <SidebarMenu to={"/class-schedule"} label="Schedule" icon={<AiOutlineSchedule />}></SidebarMenu>
            <SidebarMenu to={"/grades"} label="Grades" icon={<CiViewList />}></SidebarMenu>
            <SidebarMenu to={"/forum"} label="Forum" icon={<MdOutlineForum />}></SidebarMenu>
            <SidebarMenu to={"/announcements"} label="Announcements" icon={<TfiAnnouncement />}></SidebarMenu>
            <SidebarMenu to={"/activities"} label="Activities" icon={<MdOutlineAnnouncement />}></SidebarMenu>
            <SidebarMenu to={"/quizes"} label="Quizes" icon={<PiExam />}></SidebarMenu>
            <SidebarMenu to={"/calendar"} label="Calendar" icon={<IoCalendarNumberOutline />}></SidebarMenu>
            <SidebarMenu to={"/settings"} label="Settings" icon={<IoSettingsOutline />}></SidebarMenu>
        </div>
    )
}