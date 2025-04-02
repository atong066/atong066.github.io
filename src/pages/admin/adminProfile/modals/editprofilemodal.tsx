import { useState } from "react";
import { Modal2 } from "../../../../components/modal";
import { CancelButton, SaveButton } from "../../../../components/buttons";
import { InputInfo, TextAreaInfo } from "../../../../components/input";
interface props {
    setModalState: any,
    modalState: any
}
export default function EditProfileModal({ setModalState, modalState }: props) {
    console.log(modalState)
    const [tab, setTab] = useState(1)

    return (
        <Modal2 setModalState={setModalState} modalState={modalState} label={"Edit Profile"}>
            <nav className="pt-0 border-b border-slate-400 max-[720px]:text-[12px] gap-3 flex">
                <span onClick={() => setTab(1)} className={`${tab == 1 && "border-b-2  border-blue-900 "} cursor-pointer max-[720px]:text-sm`}>Personal Information</span>
                <span onClick={() => setTab(2)} className={`${tab == 2 && "border-b-2  border-blue-900 "} cursor-pointer max-[720px]:text-sm`}>Achievements</span>
            </nav>
            <form action="" className="overflow-auto h-[16rem]">
                <section className={`${tab === 2 ? "hidden" : " h-full"}  `}>
                    <div className="flexCotnainer">
                        <InputInfo label={"Last Name"} placeholder="Galicia"></InputInfo>
                        <InputInfo label={"First Name"} placeholder="Galicia"></InputInfo>
                        <InputInfo label={"Middle Name"} placeholder="Galicia"></InputInfo>
                    </div>
                    <div className="flexCotnainer">
                        <InputInfo label={"Contact Number"} placeholder="Galicia"></InputInfo>
                        <InputInfo label={"Email"} placeholder="Galicia"></InputInfo>
                    </div>
                    <div>
                        <TextAreaInfo label={"Address"} placeholder="Galicia"></TextAreaInfo>
                    </div>
                </section>
                <section className={`${tab === 1 ? "hidden" : "gridContainer-md"}`}>
                    tab2
                </section>
                <div className="absolute bottom-4 flex gap-2 right-4">
                    <CancelButton onClick={() => setModalState(false)}></CancelButton>
                    <SaveButton></SaveButton>
                </div>
            </form>
        </Modal2 >
    )
}