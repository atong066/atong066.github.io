import Modal from "../../../../components/modal";
import DropDown from "../components/dropdownComponent";

export default function FilterModal({ modalState, modalController }: any) {
    return (
        <Modal closeModal={modalController} label={"Filter Table"} modalState={modalState}>
            <DropDown label={"Grade Level"} placeholder={"Select Grade Level"}></DropDown>
            <DropDown label={"Section"} placeholder={"Select Section"}></DropDown>
            <div className="border-b py-1 w-full border-slate-400"></div>
            <div className="max-[720px]:text-sm flex gap-2 py-2 place-self-end ">
                <button onClick={() => modalController(false)} className="border rounded-sm px-2 py-1 bg-[#d35400] text-white">Cancel</button>
                <button onClick={() => console.log("clicked")} className="border rounded-sm px-2 py-1 bg-[#2980b9] text-white">Filter</button>
            </div>

        </Modal>
    )
}