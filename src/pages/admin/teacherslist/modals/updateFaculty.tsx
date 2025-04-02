import { Modal2 } from "../../../../components/modal";
import { InputInfo, TextAreaInfo } from "../../../../components/input";
import { FlexContainer } from "../../../../components/flexContainer";
import { useForm } from "react-hook-form";
import DropDown from "../../../../components/dropdown";
import { useAddFaculty, useUpdateFaculty } from "../../../../api/apiCall";
import { format } from "date-fns";
import { useEffect } from "react";
import { useFaculty } from "../../../../store/store";
export default function UpdateFaculty({ modalState, setModalState, refresh }: any) {
    const values = useFaculty((state) => state.teacher)
    const facultyData = values
    const { register, handleSubmit, setValue, reset } = useForm({ values })
    const updateFaculty = useUpdateFaculty()
    const submmit = (data: any) => {
        data.id = facultyData.id
        data.dateOfBirth = (format(data.dateOfBirth, "yyy-MM-dd"))
        console.log(data)
        updateFaculty.mutate(data, {
            onSuccess(data) {
                if (data.success) {

                    reset()
                    setModalState(false)
                    refresh()
                }
            }
        })


    }
    function closeModal(state: boolean) {
        console.log("reste")
        reset()
        setModalState(state)
    }
    useEffect(() => {
        // if (values) {
        //     setValue("gender", facultyData?.gender)
        // }
    }, [])
    return (
        <Modal2 submitFn={handleSubmit(submmit)} type={1} label={facultyData ? "Update Faculty" : "Add Faculty"} modalState={modalState} setModalState={closeModal}>
            <FlexContainer className="px-2 py-3">
                <InputInfo ref={facultyData?.lastName} required errMsg={"Last Name Required"} reg={register} name="lastName" label="Last Name" placeholder="Enter Last Name"></InputInfo>
                <InputInfo ref={facultyData?.firstName} required errMsg={"First Name Required"} reg={register} name="firstName" label="First Name" placeholder="Enter Firstname Name"></InputInfo>
                <InputInfo ref={facultyData?.middleName} reg={register} name="middleName" label="Middle Name" placeholder="Enter Middle Name"></InputInfo>
                <DropDown ref={facultyData?.gender} required onChange={(e: any) => setValue("gender", e.target.value)} label="Gender" placeholder="Choose Gender">
                    <option value="Male" selected={facultyData?.gender === "Male"}>Male</option>
                    <option value="Female" selected={facultyData?.gender === "Female"}>Female</option>
                </DropDown>
                <InputInfo ref={facultyData && format(facultyData?.dateOfBirth, 'yyyy-MM-dd')} required type={"date"} reg={register} name="dateOfBirth" label="Date Of Birth" placeholder="Enter Middle Name"></InputInfo>
                <InputInfo ref={facultyData?.contactNumber} required reg={register} name="contactNumber" label="Contact Number" placeholder="Enter Contact Number"></InputInfo>
                <InputInfo ref={facultyData?.email} required type="email" reg={register} name="email" label="Email" placeholder="Enter Email"></InputInfo>

            </FlexContainer>
            <FlexContainer className="px-2">
                <TextAreaInfo ref={facultyData?.address} required reg={register} name="address" label="Address" placeholder="Enter Middle Name"></TextAreaInfo>
            </FlexContainer>
        </Modal2>
    )
}