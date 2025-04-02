import { CancelButton, SaveButton } from "../../../../components/buttons";
import { InputInfo } from "../../../../components/input";
import { Modal2 } from "../../../../components/modal";
import { SubContainer } from "../../../../components/sectionContainer";
import DropDown from "../../../../components/dropdown"
import { useForm } from "react-hook-form";
import { useFaculty, useSection } from "../../../../store/store";
import { v4 as uuidv4 } from 'uuid';
import { useAddSection, useGetFacultyList } from "../../../../api/apiCall";
export default function AddSectionModal({ setModalState, modalState, refresh }: any) {
    const { register, handleSubmit, setValue, reset } = useForm()
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
    return (
        <Modal2 submitFn={handleSubmit(submit)} label="Add Section" type={1} setModalState={setModalState} modalState={modalState}>
            <SubContainer className="min-w-[20rem]">
                <DropDown required label={"Grade Level"} placeholder={"Select Grade Level"} onChange={(e: any) => setValue("gradeLevel", e.target.value)}>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <option value={index + 1}>Grade {index + 1}</option>
                    ))}
                </DropDown>
                <InputInfo required reg={register} name="sectionName" label={"Section Name"} placeholder="Enter Section Name"></InputInfo>
                <DropDown onChange={(e: any) => setValue("facultyId", e.target.value)} label={"Adviser"} placeholder={"Select Adviser"}>
                    {facultyList?.data?.map((value: any, index: any) => (
                        <option key={"adv" + index} value={value.id}>{value.lastName} {value.firstName} {value.middelName}</option>
                    ))}
                </DropDown>
            </SubContainer>

        </Modal2>
    )
}