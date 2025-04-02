import { useState } from "react"

export default function Burger() {
    const [open, setOpen] = useState(false)
    return (
        <div onClick={() => setOpen(!open)} className="cursor-pointer w-[2rem] h-[1rem]  flex justify-center items-center left-4 relative">
            <div className={`burger ${open ? "active" : ""}`} />
        </div>
    )
}