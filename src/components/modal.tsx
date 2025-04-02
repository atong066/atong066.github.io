import { CiEdit } from "react-icons/ci"
import { IoMdAdd, IoMdClose } from "react-icons/io"
import { CancelButton, SaveButton } from "./buttons"

export default function Modal({ label, children, modalState, closeModal }: any) {
    return (
        <>
            {modalState && < div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[9999] bg-[#0000004a]" >
                <div className="rounded-md w-[30rem] overflow-hidden max-[720px]:w-[20rem]">
                    <div className="max-[720px]:w-[20rem] w-full text-center bg-[#2c3e50] text-white !p-2 flex justify-between"><span>{label}</span><IoMdClose onClick={() => closeModal()} className="cursor-pointer"></IoMdClose></div>
                    <div className="card bg-white h-fit max-[720px]:w-[20rem] shadow-2xl p-2 border border-slate-100 overflow-hidden">
                        {children}
                    </div>
                </div>
            </div >}
        </>
    )
}
interface props {
    label?: string,
    children?: React.ReactNode
    setModalState: any
    modalState: any
    type?: number
    submitFn?: any
    step?: number
}
export function Modal2({ label, children, setModalState, modalState, type, submitFn, step }: props) {
    return (
        <div className={`border fixed top-0 left-0 w-full h-dvh flex justify-center items-center  z-[9] ${modalState == false && "hidden"}`}>
            <div className="fixed top-0 left-0 w-full h-screen bg-[#0000281c]"></div>
            <dialog open={modalState} className="border w-fit border-slate-300 relative shadow-2xl m-auto min-w-[5rem] min-h-fit z-[99999] rounded-md  max-w-[35rem]  overflow-hidden min-[720px]:min-w-[10rem] h-fit">
                <nav className="text-lg flex items-center border-b border-slate-300 py-1 pl-4 text-slate-600 gap-2 justify-between text-[14px]"><span className="flex items-center gap-2 text-[22px] ">{label}</span><IoMdClose onClick={() => setModalState(false)} className="cursor-pointer mr-2 text-[18px]"></IoMdClose></nav>
                <section className="px-2 flex flex-col">
                    <form action="" onSubmit={submitFn}>
                        {children}
                        {!!!step && <div className="flex gap-2 p-2 place-self-end border-t w-full mt-2 border-slate-400 justify-end">
                            <CancelButton onClick={() => setModalState(false)}></CancelButton>
                            <SaveButton></SaveButton>
                        </div>}
                    </form>

                </section>

            </dialog>
        </div>

    )
}