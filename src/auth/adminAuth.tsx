import { Link, Outlet, useLocation } from "react-router";
import { PiExam, PiRankingDuotone, PiStudentFill } from "react-icons/pi";
import { ReactElement, useEffect, useState } from "react";
import { FaHome, FaRegFile, FaRegFileWord } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { GrScorecard } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";
import { MdEventAvailable, MdOutlineAssessment, MdOutlineForum } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
import { SiCoursera, SiGoogleclassroom } from "react-icons/si";
import { TfiAnnouncement } from "react-icons/tfi";
function ProfileDropdown({ className }: any) {
    const [dropState, setDropState] = useState<boolean>(false)
    return (
        <div className={`relative ${className}`}>
            <div className="profileTab">
                <div className="overflow-hidden size-10 rounded-full profileImage">
                    <img className="w-full h-full" src="/images/nobita.jpg" alt="" />
                </div>
                <div className="flex flex-col">
                    <span className="text-white text-sm">Galicia</span>
                    <span className="text-white text-sm">Virgilio Sales</span>
                </div>
                <IoIosArrowDown className={`text-white cursor-pointer ${dropState ? "rotate-180" : "rotate-0"} transition-[rotate]`} onClick={() => setDropState(true)}></IoIosArrowDown>
            </div>
            <div className={`${dropState ? "visible" : "invisible"}`}>
                <div onClick={() => setDropState(false)} className="fixed top-0  left-0 w-full h-screen bg-[#00000038] z-0"></div>
                <div className={`absolute z-20 right-5 top-11 w-fit min-w-[12rem] h-[20rem] bg-slate-100 shadow border border-slate-300 `}>
                    <ul className="relative text-slate-600">
                        <li className="hover:bg-[#2c3e50] hover:text-white hover:cursor-pointer flex items-center gap-3 p-2 px-3 text-lg border-b border-slate-400"><FaUser />Profile</li>
                        <li className="hover:bg-[#2c3e50] hover:text-white hover:cursor-pointer flex items-center gap-3 p-2 px-3 text-lg border-b border-slate-400"><FaRegMessage></FaRegMessage>Messages</li>
                        <li className="hover:bg-[#2c3e50] hover:text-white hover:cursor-pointer flex items-center gap-3 p-2 px-3 text-lg border-b border-slate-400"><IoShieldCheckmark />Security</li>
                        <li className="hover:bg-[#2c3e50] hover:text-white hover:cursor-pointer flex items-center gap-3 p-2 px-3 text-lg border-b border-slate-400"><FaCalendarAlt />Events</li>
                        <li className="hover:bg-[#2c3e50] hover:text-white hover:cursor-pointer flex items-center gap-3 p-2 px-3 text-lg border-b border-slate-400"><IoMdSettings />Settings</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
interface props {
    link: string
    icon?: ReactElement
    label?: string
}
function LinkComponent({ link, icon, label }: props) {
    const locations = useLocation();
    return (
        <Link to={link} className={`${locations?.pathname === link && "bg-[#2c3e50] text-white rounded-md"} hover:bg-[#2c3e50] hover:rounded-md hover:text-white hover:cursor-pointer flex items-center p-2 pl-3 pr-3 text-slate-500 gap-2 `}>{icon}<span className="text-[15px] font-normal">{label}</span></Link>
    )
}
export default function AdminAuth() {
    const [aside, setAside] = useState<boolean>()
    return (
        <section className="select-none overflow-hidden h-full section" >
            <nav className="navbar">
                <GiHamburgerMenu onClick={() => setAside(!aside)} className="burger" />
                <ProfileDropdown className="profileTab"></ProfileDropdown>
            </nav>
            <main>
                <aside className={` px-1 font-semibold space-y-[.15rem] ${aside ? 'active' : ''}`}>

                    <LinkComponent link={"/admin/home"} label={"Dashboard"} icon={<FaHome size={"1.2rem"} />}></LinkComponent>
                    <LinkComponent link={"/admin/profile"} label={"Profile"} icon={<FaUser size={"1.2rem"} />}></LinkComponent>
                    <LinkComponent link={"/admin/forum"} label={"Forum"} icon={<MdOutlineForum size={"1.2rem"} />}></LinkComponent>
                    <LinkComponent link={"/admin/messages"} label={"Messages"} icon={<FaRegMessage size={"1.2rem"} />}></LinkComponent>
                    <div className="px-1 text-[15px] font-semibold text-slate-500 border-t w-full border-slate-300">Users</div>
                    <LinkComponent link={"/admin/students"} label={"Students"} icon={<PiStudentFill size={"1.2rem"} />}></LinkComponent>
                    <LinkComponent link={"/admin/section"} label={"Section"} icon={<SiGoogleclassroom size={"1.2rem"} />}></LinkComponent>
                    <LinkComponent link={"/admin/teacherslist"} label={"Faculty"} icon={<FaUserGraduate size={"1.2rem"} />}></LinkComponent>

                    <div className="px-1 text-[15px] font-semibold text-slate-500 border-t w-full border-slate-300">Academics</div>
                    <LinkComponent link={"/admin/messages"} label={"Exams/Quizes"} icon={<PiExam size={"1.2rem"} />}></LinkComponent>
                    <LinkComponent link={"/admin/messages"} label={"Curiculum/Course"} icon={<SiCoursera size={"1.2rem"} />}></LinkComponent>
                    <LinkComponent link={"/admin/messages"} label={"Assessment"} icon={<PiRankingDuotone size={"1.2rem"} />}></LinkComponent>
                    <LinkComponent link={"/admin/messages"} label={"Faculty Assessment"} icon={<MdOutlineAssessment size={"1.2rem"} />}></LinkComponent>

                    <LinkComponent link={"/admin/grades"} label={"Grades"} icon={<GrScorecard size={"1.2rem"} />}></LinkComponent>

                    <div className="px-1 text-[15px] font-semibold text-slate-500 border-t w-full border-slate-300">Documents</div>
                    <LinkComponent link={"/admin/reports"} label={"Reports"} icon={<GoReport size={"1.2rem"} />}></LinkComponent>
                    <LinkComponent link={"/admin/reports"} label={"School Files"} icon={<FaRegFile size={"1.2rem"} />}></LinkComponent>
                    <LinkComponent link={"/admin/settings"} label={"School Forms"} icon={<FaRegFileWord size={"1.2rem"} />}></LinkComponent>
                    <div className="px-1 text-[15px] font-semibold text-slate-500 border-t w-full border-slate-300">Calendar / Events / Notices</div>
                    <LinkComponent link={"/admin/calendar"} label={"Calendar"} icon={<FaCalendarAlt size={"1.2rem"} />}></LinkComponent>
                    <LinkComponent link={"/admin/settings"} label={"School Events"} icon={<MdEventAvailable size={"1.2rem"} />}></LinkComponent>
                    <LinkComponent link={"/admin/settings"} label={"Announcements"} icon={<TfiAnnouncement size={"1.2rem"} />}></LinkComponent>
                    <div className="px-1 text-[15px] font-semibold text-slate-500 border-t w-full border-slate-300"></div>

                    <LinkComponent link={"/admin/settings"} label={"Settings"} icon={<IoMdSettings size={"1.2rem"} />}></LinkComponent>
                </aside>
                <section className={`mainSection overflow-auto ${aside && "!hidden"}`}>
                    <Outlet></Outlet>
                </section>
            </main>
        </section>
    )
}