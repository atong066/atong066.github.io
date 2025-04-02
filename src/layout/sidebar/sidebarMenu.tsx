import { Link, useLocation } from "react-router";
interface props {
    children?: React.ReactNode,
    icon: React.ReactNode,
    label: React.ReactNode,
    to: string
}
export default function SidebarMenu(props: props) {
    const locations = useLocation();
    return (
        <Link to={props.to} className={`${locations?.pathname === props.to && "bg-[#192a56] text-slate-100 border-[#192a56]"} flex text-md font-semibold items-center gap-1 cursor-pointer !p-3 w-full border-b-1 border-[#dbdbdb] hover:bg-[#192a56] hover:text-slate-100`}>
            {props.icon}
            <span>{props.label}</span>
        </Link>
    )
}