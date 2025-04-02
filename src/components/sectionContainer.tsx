interface props {
    children?: React.ReactNode,
    className?: string
}
export default function SectionContainer({ children, className }: props) {
    return (
        <section className={`w-full p-2 min-[720px]:max-w-[55rem] min-[720px]:shadow-2xl min-[720px]:min-w-[30rem] min-h-full min-[720px]:border border-slate-300 h-fit ${className}`}>
            {children}
        </section>
    )
}
export function SubContainer({ children, className }: props) {
    return (
        <section className={`px-4 max-[720px]:px-2 flex flex-col gap-2 min-h-full ${className}`}>
            {children}
        </section>
    )
}