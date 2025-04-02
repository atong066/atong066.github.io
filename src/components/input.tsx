interface props {
    placeholder?: string
    reg?: any,
    name?: string
    classname?: string,
    type?: string,
    value?: any,
    disabled?: boolean,
    label?: string,
    required?: boolean,
    errMsg?: string,
    ref?: string
}
export default function Input({ placeholder, reg, name, classname, type }: props) {
    return (
        <div className={`border border-[#d9d9d9c2] ${classname}`}>
            {reg ? !type ? <input {...reg(name)} className="w-full p-2 z-10 outline-none h-full" placeholder={placeholder} type="text" /> : <textarea placeholder={placeholder} {...reg(name)} className="w-full outline-none h-full p-2"></textarea> : !type ? <input className="w-full p-2 z-10 outline-none h-full" placeholder={placeholder} type="text" /> : <textarea placeholder={placeholder} className="w-full outline-none h-full p-2"></textarea>}
        </div>
    )
}
export function InputInfo({ value, type, label, disabled, placeholder, reg, name, required, errMsg, ref }: props) {
    return (
        <div className="flex-grow">
            <label htmlFor="" className="font-semibold max-[720px]:text-sm !text-[14px]">{label}</label>
            <div className="border  rounded-sm border-slate-300 overflow-hidden  text-[14px]">
                {reg ? <input  {...reg(name)} required={required} onInvalid={(e: any) => e.target.setCustomValidity(errMsg ? errMsg : "Field Required")} onInput={(e) => e.currentTarget.setCustomValidity('')} placeholder={placeholder} disabled={disabled} className="outline-none text-[14px] p-1 w-full break-all max-[720px]:text-[12px]" type={type ? type : "text"} />
                    : <input placeholder={placeholder} disabled={disabled} className="outline-none p-1 w-full break-all max-[720px]:text-[12px]" type={type ? type : "text"} />}
            </div>
        </div>

    )
}

export function TextAreaInfo({ value, type, label, disabled, reg, name, required, errMsg, ref }: props) {
    return (
        <div className="flex-grow">
            <label htmlFor="" className="font-semibold text-[14px]">{label}</label>
            <div className="border rounded-sm border-slate-300 overflow-hidden ">
                <textarea defaultValue={ref} {...reg(name)} required={required} onInvalid={(e: any) => e.target.setCustomValidity(errMsg ? errMsg : "Field Required")} onInput={(e) => e.currentTarget.setCustomValidity('')} disabled={disabled} className="outline-none p-1 w-full break-word resize-none text-[14px]" value={value} />
            </div>
        </div>

    )
}