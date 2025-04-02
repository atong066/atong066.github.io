import { FlexContainer } from "./flexContainer"
import { IoIosArrowBack, IoIosArrowForward, IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { LuArrowDownNarrowWide } from "react-icons/lu";
export function Table({ children }: any) {
    return (
        <>
            <FlexContainer spaceBetween>
                <div className="flex items-center text-[14px] gap-2 text-slate-400">
                    <span>Entries</span>
                    <div className="border pl-2 pr-1 rounded-sm flex items-center gap-2"><span>10</span><IoIosArrowDown /> </div>
                </div>
                <div className="border border-slate-400 rounded-sm flex items-center pr-2 max-[720px]:text-xs max-[720px]:w-32">
                    <input className="outline-none text-[14px] w-full px-2 py-[.2rem]" type="text" placeholder="Search Student" />
                    <IoIosSearch className="cursor-pointer" size={"1.5rem"}></IoIosSearch>
                </div>

            </FlexContainer>
            <section className="overflow-hidden rounded-t border-t-3  border-slate-400">

                <table className="w-full">
                    {children}
                </table>
                <FlexContainer className={"justify-between items-center max-[720px]:text-[15px]"}>
                    <span className="text-slate-600 text-[14px] pl-2">Showing 10  out of 100</span>
                    <FlexContainer className={"p-2 place-self-end items-center max-[720px]:text-[15px] text-[14px]"}>
                        <IoIosArrowBack />
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>...</span>
                        <span>8</span>
                        <span>9</span>
                        <IoIosArrowForward />
                    </FlexContainer>

                </FlexContainer>
            </section >
        </>

    )
}
export function TableHeader({ children }: any) {
    return (
        <thead className=" max-[720px]:text-[12px] ">
            {children}
        </thead>
    )
}
interface props {
    children?: any
    className?: string,
    tableKey?: number
}
export function TableRow({ children, className, tableKey }: props) {
    return (
        <tr key={tableKey} className={` border text-[15px]  border-slate-400 ${className} `}>
            {children}
        </tr>
    )
}
export function TableHead({ children, className, filter }: any) {
    return (
        <th className={`px-2 py-1 !pl-3 text-start border-r border-b-2    last:border-r-0 border-slate-300 !font-semibold   ${className}`}>
            <div className="flex items-center justify-between ">
                {children}
                {filter && <LuArrowDownNarrowWide className="group:last:hidden cursor-pointer text-slate-400 relative right-2" />}
            </div>
        </th>
    )
}
export function TableBody({ children }: any) {
    return (
        <tbody>
            {children}
        </tbody>
    )
}

export function TableData({ children, className }: any) {
    return (
        <td className={`max-[720px]:text-[12px] text-[14px] !py-[.1rem] pl-3 text-start border-r last:border-r-0 border-slate-300   items-center ${className}`}>
            {children}
        </td>
    )
}