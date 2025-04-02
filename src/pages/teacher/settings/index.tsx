import { IoSettingsOutline } from "react-icons/io5";
import Divider from "../../../components/divider";

export default function SettingsTeacher() {
    return (
        <div>
            <div className="header flex items-center gap-2 justify-between">
                <div className="header flex items-center gap-2">
                    <IoSettingsOutline className="size-6 text-[#192a56]"></IoSettingsOutline>
                    <div className="text-xl font-emibold text-[#192a56]">Settings</div>
                </div>
            </div>
            <Divider></Divider>
        </div>
    )
}