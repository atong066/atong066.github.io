export default function Input({ label, placeholder, name, type, reg }: any) {
    return (
        <div>
            <span>{label}</span>
            <div className="border border-slate-300 rounded-md overflow-hidden">
                <input {...reg(name)} type={type ? type : "text"} name={name} placeholder={placeholder} className="p-2 w-full outline-none " />
            </div>
        </div>
    )
}
