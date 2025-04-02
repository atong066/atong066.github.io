interface props {
    children?: React.ReactNode,
    className?: string
}
export default function BoxContainer({ children, className }: props) {
    return (
        <div className={`border border-slate-300 shadow-xl  rounded-md h-fit p-2 ${className}`}>
            {children}
        </div>
    )
}