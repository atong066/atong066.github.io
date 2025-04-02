import { useState } from "react"
import { useForm } from "react-hook-form"

import { IoMdClose } from "react-icons/io"
import { FaAddressCard } from "react-icons/fa";
import { Modal2 } from "../../../../components/modal"
import DropDown from "../../../../components/dropdown";
import { InputInfo } from "../../../../components/input";
import { useAddStudent } from "../../../../store/store";
import { FlexContainer } from "../../../../components/flexContainer";
interface modalProps {
    modalState: boolean,
    modalController: any
}
export default function Modal({ modalState, modalController }: modalProps) {
    const { register, handleSubmit, reset, setValue } = useForm()
    const [next, setNext] = useState(1)
    const addStudent = useAddStudent(state => state.addStudent)
    const Submit = (data: any) => {
        if (next != 2) {
            setNext(2)
        }
        else {
            addStudent(data)
            reset()
            modalController(false)
            setNext(1)
        }
    }
    return (
        <Modal2 step={next} submitFn={handleSubmit(Submit)} label="New Student" type={1} setModalState={modalController} modalState={modalState}>
            {next === 1 && <><div className="p-2 px-2 relative space-y-2">
                <span className="font-semibold relative bg-white z-[999] flex items-center gap-2 text-slate-700"><FaAddressCard></FaAddressCard>Student Information</span>
                <FlexContainer>
                    <DropDown onChange={(e: any) => setValue("gradeLevel", e.target.value)} placeholder="Choose Grade Level" label="Grade Level">
                        <option value="1">Grade 1</option>
                        <option value="2">Grade 2</option>
                        <option value="3">Grade 3</option>
                        <option value="4">Grade 4</option>
                        <option value="5">Grade 5</option>
                        <option value="6">Grade 6</option>
                        <option value="7">Grade 7</option>
                        <option value="8">Grade 8</option>
                        <option value="9">Grade 9</option>
                        <option value="10">Grade 10</option>
                        <option value="11">Grade 11</option>
                        <option value="12">Grade 12</option>
                    </DropDown>
                </FlexContainer>


                <div className="flex justify-between gap-2 InputInfoContainer">
                    <InputInfo reg={register} name={"lastName"} label="Lastname" placeholder="Enter Last Name"></InputInfo>
                    <InputInfo reg={register} name={"firstName"} label="Firstname" placeholder="Enter First Name"></InputInfo>
                    <InputInfo reg={register} name={"middelName"} label="Middlename" placeholder="Enter Middle Name"></InputInfo>
                </div>
                <div className="flex  gap-2 InputInfoContainer" >
                    <DropDown placeholder="Choose Gender" label="Gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </DropDown>
                    <InputInfo reg={register} type="date" name={"birthDate"} label="Birth Date" placeholder="Enter Last Name"></InputInfo>
                    <InputInfo reg={register} type="text" name={"nationality"} label="Nationality" placeholder="Enter Nationality"></InputInfo>
                </div>
            </div>
                <div className="p-2 relative space-y-2 ">

                    <span className="font-semibold relative bg-white z-[999]">Address Information</span>
                    <div className="flex justify-between gap-2 InputInfoContainer">
                        <InputInfo reg={register} name={"housenumber"} label="House Number" placeholder="Enter House Number"></InputInfo>
                        <InputInfo reg={register} name={"street"} label="Street" placeholder="Enter Street Name"></InputInfo>
                        <InputInfo reg={register} name={"brgy"} label="Barangay" placeholder="Enter Barangay Name"></InputInfo>
                    </div>
                    <div className="flex  gap-2 InputInfoContainer" >
                        <InputInfo reg={register} type="text" name={"municipality"} label="Municipality" placeholder="Enter Municipality"></InputInfo>
                        <InputInfo reg={register} type="text" name={"province"} label="Province" placeholder="Enter Province Name"></InputInfo>

                    </div>
                </div></>}
            {next === 2 &&
                <>
                    <div className="p-2 relative space-y-2 ">

                        <span className="font-semibold relative bg-white z-[999]">Father's Information</span>
                        <div className="flex justify-between gap-2 InputInfoContainer">
                            <InputInfo reg={register} name={"flastName"} label="Lastname" placeholder="Enter Last Name"></InputInfo>
                            <InputInfo reg={register} name={"ffirstName"} label="Firstname" placeholder="Enter First Name"></InputInfo>
                            <InputInfo reg={register} name={"fmiddelName"} label="Middlename" placeholder="Enter Middle Name"></InputInfo>
                        </div>
                        <div className="flex  gap-2 InputInfoContainer" >
                            <InputInfo reg={register} type="date" name={"mbirthDate"} label="Birth Date" placeholder="Enter Last Name"></InputInfo>
                            <InputInfo reg={register} type="text" name={"mnationality"} label="Nationality" placeholder="Enter Nationality"></InputInfo>
                        </div>
                    </div>
                    <div className="p-2 relative space-y-2">

                        <span className="font-semibold relative bg-white z-[999]">Mother's Information</span>
                        <div className="flex justify-between gap-2 InputInfoContainer">
                            <InputInfo reg={register} name={"mflastName"} label="Lastname" placeholder="Enter Last Name"></InputInfo>
                            <InputInfo reg={register} name={"mffirstName"} label="Firstname" placeholder="Enter First Name"></InputInfo>
                            <InputInfo reg={register} name={"mfmiddelName"} label="Middlename" placeholder="Enter Middle Name"></InputInfo>
                        </div>
                        <div className="flex  gap-2 InputInfoContainer" >
                            <InputInfo reg={register} type="date" name={"mbirthDate"} label="Birth Date" placeholder="Enter Last Name"></InputInfo>
                            <InputInfo reg={register} type="text" name={"mnationality"} label="Nationality" placeholder="Enter Nationality"></InputInfo>
                        </div>
                    </div>
                </>

            }
            <div className="border-t border-slate-400 mx-3 mb-2"></div>
            <div className="py-2 h-10  mb-1 mt-3 flex gap-2 place-self-end">
                {next == 2 && <button type="button" onClick={() => setNext(1)} className="flex text-[14px] place-self-end relative right-4  border cursor-pointer bg-[#2980b9] px-4 py-1 rounded-sm border-slate-50 text-white">{next == 2 ? 'Back' : 'Back'}</button>}
                <button className="flex place-self-end relative right-4  border cursor-pointer text-[14px] bg-[#2980b9] px-4 py-1 rounded-sm border-slate-50 text-white">{next == 1 ? 'Next' : 'Complete'}</button>
            </div>
        </Modal2>

    )
}