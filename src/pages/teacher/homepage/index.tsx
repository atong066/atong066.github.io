import { eachDayOfInterval, endOfMonth, format, getDay, startOfMonth } from "date-fns"
import Divider from "../../../components/divider"
import { IoSettingsOutline } from "react-icons/io5"
import { FaHome } from "react-icons/fa";
import MainLayout from "../../../layout";
interface CardProps {
    children: React.ReactNode
    className?: string
}
function Card({ children, className }: CardProps) {
    return (
        <div className={`card rounded-md h-full !p-2 ${className}`}>
            {children}
        </div>
    )
}
function CalendarHome() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const currentDate = new Date()
    const firstDay = startOfMonth(currentDate)
    const lastDay = endOfMonth(currentDate)
    const daysInMonth: any = eachDayOfInterval({
        start: firstDay,
        end: lastDay
    })
    const dayIndex = getDay(currentDate)
    return (
        <div className=" h-full !mt-2 rounded-md overflow-hidden">
            <div className="grid grid-cols-7 bg-green-500 !p-2 text-slate-50 text-center !mb-1">
                {days.map((value, index) => (
                    <div key={index}>{value}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 text-center gap-2 shadow-lg border overflow-hidden border-slate-100 border-t-0 !pb-2">
                {Array.from({ length: dayIndex }).map((_, index) => (
                    <div key={`blank` + index}></div>
                ))}
                {daysInMonth.map((day: any, index: number) => (
                    <div className="w-full h-18 border border-slate-50 rounded-sm relative card2">
                        <div className="absolute right-2" key={`date` + index}>{format(day, "d")}</div>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default function HomePage() {
    return (
        <MainLayout>
            <div className="p-2 h-full flex flex-col">
                <div className="header flex items-center gap-2 justify-between">
                    <div className="header flex items-center gap-2">
                        <FaHome className="size-6 text-[#192a56]"></FaHome>
                        <div className="text-xl font-emibold text-[#192a56]">Home</div>
                    </div>
                </div>
                <Divider></Divider>
                <div className="grid grid-cols-4 gap-2 h-full relative top-4">
                    <Card className="bg-[#e84118] text-white">
                        asd
                    </Card>
                    <Card className="bg-[#8c7ae6] text-white">
                        asd
                    </Card>
                    <Card className="bg-[#40739e] text-white">
                        asd
                    </Card>
                    <Card className="bg-[#0097e6] text-white">
                        asd
                    </Card>
                </div>
                <div className="flex justify-between gap-5 !mt-2 h-full relative top-4">
                    <CalendarHome></CalendarHome>
                    <div className="w-[50%] flex flex-col gap-2">

                        <div className=" border h-full rounded-sm border-slate-200 overflow-hidden text-slate-50 font-semibold shadow-lg">
                            <div className="bg-[#e84118] !p-2">Notification</div>
                        </div>
                        <div className="border h-full rounded-sm border-slate-200 overflow-hidden text-slate-50 font-semibold shadow-lg">
                            <div className="bg-[#273c75] !p-2">Announcements</div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}