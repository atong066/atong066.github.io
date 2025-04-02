import { IoMdClose } from "react-icons/io";
interface modalProps {
    modalState: boolean,
    modalController: any
}
export default function ViewStudent({ modalState, modalController }: modalProps) {

    return (
        <>
            {modalState && <div className="fixed viewStudent top-0 left-0 w-full h-screen flex items-center justify-center z-30">
                <div className="fixed top-0 left-0 w-full h-screen bg-[#00000048] z-0"></div>
                <div className="modalContainer w-[28rem] h-[30rem]  bg-white overflow-hidden shadow-2xl relative z-10 rounded-t-sm">
                    <IoMdClose onClick={() => modalController(false)} className="cursor-pointer absolute right-2 top-2 text-xl text-white"></IoMdClose>
                    <div className="h-20 bg-[#16a085] text-lg text-slate-100 flex items-center justify-between head" >
                        <div className="px-3">
                            <div className="font-bold text-2xl text-slate-100 idNumber">111-0339</div>
                            <div className="text-[16px] section ">Section 1</div>
                        </div>
                    </div>
                    <div>
                        <div className="rounded-full overflow-hidden size-28 absolute left-[50%] right-[50%] top-4 place-self-center flex profilePic">
                            <img className="w-full h-full" src="/images/nobita.jpg" alt="" />
                        </div>
                        <div className="relative top-12 info">
                            <div className="text-center mb-2 text-lg font-semibold py-1">Galicia,Virgilio Sales</div>
                            <div className="px-3 flex gap-3 mb-2 border-b border-slate-200 ">
                                <div className="cursor-pointer border-b-2 pb-1 border-blue-950 ">Personal Information</div>
                                <div className="cursor-pointer">Parents Information</div>
                            </div>
                            <section className="overflow-auto">
                                <div className="px-4 flex gap-2 inputContainer">
                                    <div>
                                        <span className="font-semibold">Gender:</span>
                                        <div className="border border-slate-200 shadow rounded-md p-2 min-w-[13rem] px-2">Male</div>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Birth Date:</span>
                                        <div className="border border-slate-200 shadow rounded-md p-2 min-w-[13rem] px-2">March 10, 1994</div>
                                    </div>
                                </div>
                                <div className="px-4 flex gap-2 pt-2">
                                    <div className="w-full  ">
                                        <span className="font-semibold">Address:</span>
                                        <div className="border border-slate-200 shadow rounded-md p-2 min-w-[13rem] w-full px-2">102 Inaldo St. Bonfal East, Bayombong Nueva Vizcaya</div>
                                    </div>

                                </div>
                                <div className="px-4 flex gap-2 pt-2 inputContainer">
                                    <div>
                                        <span className="font-semibold">Religion:</span>
                                        <div className="border border-slate-200 shadow rounded-md p-2 min-w-[13rem] px-2">Catholic</div>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Nationality:</span>
                                        <div className="border border-slate-200 shadow rounded-md p-2 min-w-[13rem] px-2">Filipino</div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>


                </div>

            </div>}
        </>
    )
}