
interface props {
    label: string,
    placeholder: string,
    children?: any,
    state?: boolean,
    onClick?: any,
    onChange?: any
    required?: boolean,
    errMsg?: string,
    ref?: any
}
export default function DropDown({ label, placeholder, children, state, onClick, onChange, required, errMsg, ref }: props) {

    return (
        <div className="relative z-0 flex flex-col gap-1">
            <span className="max-[720px]:text-[15px] !text-[14px] font-semibold">{label}</span>
            <select defaultValue={ref} required={required} onInvalid={(e: any) => e.target.setCustomValidity(errMsg ? errMsg : "Field Required")} onInput={(e) => e.currentTarget.setCustomValidity('')} onChange={onChange} name="" id="" className="border border-slate-400 px-2 text-[14px] py-1 rounded-sm min-w-[10rem] text-slate-600 outline-none max-[720px]:text-[15px] max-[720px]:py-1 max-[720px]:min-w-[10rem]">
                <option value="" selected disabled>{placeholder}</option>
                {children}
            </select>
        </div>
    )
}