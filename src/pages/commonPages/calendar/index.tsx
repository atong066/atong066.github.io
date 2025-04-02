import { IoCalendarNumberOutline } from "react-icons/io5";
import Divider from "../../../components/divider";

export default function Caldendar() {
    return (
        <div>
            <div className="header flex items-center gap-2 justify-between">
                <div className="header flex items-center gap-2">
                    <IoCalendarNumberOutline className="size-6 text-[#192a56]"></IoCalendarNumberOutline>
                    <div className="text-xl font-emibold text-[#192a56]">Calendar</div>
                </div>
            </div>
            <Divider></Divider>
        </div>

    )
}