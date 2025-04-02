import { InputInfo } from "../../../../components/input";
import { Modal2 } from "../../../../components/modal";
import { SubContainer } from "../../../../components/sectionContainer";
import DropDown from "../../../../components/dropdown"
import { useForm } from "react-hook-form";
import { useAddSection, useGetFacultyList } from "../../../../api/apiCall";
import { useSection } from "../../../../store/store";
import { useEffect } from "react";
export default function EditSectoion({ setModalState, modalState, refresh, id }: any) {
    const values = useSection((state) => state.data)
    console.log(values)
    const { register, handleSubmit, setValue, reset } = useForm(values)

    const addSection = useAddSection()
    const { data: facultyList } = useGetFacultyList()
    const submit = (data: any) => {
        addSection.mutate(data, {
            onSuccess(data) {
                refresh()
                setModalState(false)
                reset()
            }
        })

    }
    useEffect(() => {
        setValue('gradeLevel', values.gradeLevel)
    }, [])
    return (
        <Modal2 submitFn={handleSubmit(submit)} label="Edit Section Details" type={1} setModalState={setModalState} modalState={modalState}>
            <SubContainer className="min-w-[20rem]">
                <DropDown required label={"Grade Level"} placeholder={"Select Grade Level"} onChange={(e: any) => setValue("gradeLevel", e.target.value)}>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <option value={index + 1}>Grade {index + 1}</option>
                    ))}
                </DropDown>
                <InputInfo ref={values?.sectionName} required reg={register} name="sectionName" label={"Section Name"} placeholder="Enter Section Name"></InputInfo>
                <DropDown onChange={(e: any) => setValue("facultyId", e.target.value)} label={"Adviser"} placeholder={"Select Adviser"}>
                    {facultyList?.data?.map((value: any, index: any) => (
                        <option key={"adv" + index} value={value.id}>{value.lastName} {value.firstName} {value.middelName}</option>
                    ))}
                </DropDown>
            </SubContainer>

        </Modal2>
    )
}