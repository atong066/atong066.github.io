import { Modal2 } from "../../../../components/modal";
import { InputInfo, TextAreaInfo } from "../../../../components/input";
import { FlexContainer } from "../../../../components/flexContainer";
import { useForm } from "react-hook-form";
import DropDown from "../../../../components/dropdown";
import { useAddFaculty } from "../../../../api/apiCall";
import { useEffect } from "react";
export default function AddFacultyModal({ modalState, setModalState, refresh }: any) {
    const { register, handleSubmit: send, setValue, reset: resetAll, resetField } = useForm()
    const addFacultyMember = useAddFaculty()
    const submmit = (data: any) => {
        console.log("asd")
        addFacultyMember.mutate(data, {
            onSuccess(data) {
                if (data.success) {
                    resetAll()
                    setModalState(false)
                    refresh()
                }
            }
        })


    }
    function closeModal(state: boolean) {
        console.log("reste")
        resetField("lastName")
        setModalState(state)
    }
    useEffect(() => {
        resetAll({ lastName: "" })
    }, [modalState])
    return (
        <Modal2 submitFn={send(submmit)} type={1} label={"Add Faculty"} modalState={modalState} setModalState={closeModal}>
            <FlexContainer className="px-2 py-3">
                <InputInfo required errMsg={"Last Name Required"} reg={register} name="lastName" label="Last Name" placeholder="Enter Last Name"></InputInfo>
                <InputInfo required errMsg={"First Name Required"} reg={register} name="firstName" label="First Name" placeholder="Enter Firstname Name"></InputInfo>
                <InputInfo reg={register} name="middleName" label="Middle Name" placeholder="Enter Middle Name"></InputInfo>
                <DropDown required onChange={(e: any) => setValue("gender", e.target.value)} label="Gender" placeholder="Choose Gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </DropDown>
                <InputInfo required type={"date"} reg={register} name="dateOfBirth" label="Date Of Birth" placeholder="Enter Middle Name"></InputInfo>
                <InputInfo required reg={register} name="contactNumber" label="Contact Number" placeholder="Enter Contact Number"></InputInfo>
                <InputInfo required type="email" reg={register} name="email" label="Email" placeholder="Enter Email"></InputInfo>

            </FlexContainer>
            <FlexContainer className="px-2">
                <TextAreaInfo required reg={register} name="address" label="Address" placeholder="Enter Middle Name"></TextAreaInfo>
            </FlexContainer>
        </Modal2>
    )
}