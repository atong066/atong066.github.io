import { FaDownload } from "react-icons/fa6";
import { MdOutlinePrint } from "react-icons/md";
export default function CLassSchedule() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    const Time = ["7:30-8:30", "8:30-9:30", "9:30-10:30", "10:30-11:30", "1-2", "2-3", "3-4", "4-5"]
    return (
        <div>
            <div className="flex justify-between">
                <span className="text-xl text-semibold">Class Schedule</span>
                <div className="flex justify-center gap-2 items-center">
                    <FaDownload className="size-5"></FaDownload>
                    <button className="border rounded-md w-15 flex justify-center cursor-pointer bg-[#00a8ff] border-slate-100 shadow-lg"><MdOutlinePrint className="text-slate-100 size-6"></MdOutlinePrint></button>
                </div>
            </div>
            <div className="border border-slate-200 !mb-2 !mt-2"></div>
            <div className="grid grid-cols-6 bg-[#273c75] !p-2 text-slate-50 text-center !mb-1 rounded-t-md">
                <div>Time</div>
                {days.map((value, index) => (
                    <div key={index}>{value}</div>
                ))}
            </div>
            <div className="flex flex-col gap-12">
                <div className="!p-2 !mb-1  grid grid-cols-6 items-center">
                    {Time.map((value, index) => (
                        <>
                            <div className="border border-slate-200 h-15 text-center" key={index}>{value}</div>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div key={`blank` + index}></div>
                            ))}
                        </>


                    ))}
                </div>
            </div>
        </div>
    )
}