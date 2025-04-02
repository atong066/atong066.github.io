import { useState } from "react";
import AddButton, { EditButton, ViewButton } from "../../../components/buttons";
import DropDown from "../../../components/dropdown";
import { FlexContainer } from "../../../components/flexContainer";
import Headers from "../../../components/header";
import SectionContainer, { SubContainer } from "../../../components/sectionContainer";
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow } from "../../../components/table";
import AddSectionModal from "./modals/addSectionModal";
import { IoMdAdd } from "react-icons/io";
import { FiPrinter } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { useFaculty, useSection } from "../../../store/store";
import { useGetSectionDetails, useGetsectionList } from "../../../api/apiCall";
import EditSectoion from "./modals/editSection";
export default function Section() {
    const [modalState, setModal] = useState(false)
    const [editModal, setEditmodal] = useState(false)
    const [gLevel, setGlevel] = useState(0)
    const [activeId, setActiveId] = useState()
    const { data: section, refetch } = useGetsectionList()
    const { data: sectionDetails, mutate: getSectionDet } = useGetSectionDetails()
    console.log(sectionDetails)
    function openEditModal(id: any) {
        console.log(id)
        getSectionDet({ id: id }, {
            onSuccess(data) {
                useSection.setState({ data: data })
                setActiveId(id)
                setEditmodal(true)
            }
        })

    }
    return (
        <SectionContainer>
            <AddSectionModal refresh={refetch} setModalState={setModal} modalState={modalState}></AddSectionModal>
            <EditSectoion values={sectionDetails} id={activeId} refresh={refetch} setModalState={setEditmodal} modalState={editModal}></EditSectoion>
            <Headers label={"Section"}></Headers>
            <SubContainer>
                <div className="flex items-center justify-between p-2 max-[720px]:p-1 ">
                    <DropDown onChange={(e: any) => setGlevel(e.target.value)} label={"Grade Level"} placeholder={"Select Grade Level"}>
                        <option value={0}>All</option>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <option value={index + 1}>Grade {index + 1}</option>
                        ))}
                    </DropDown>
                    <div className="flex border items-center rounded-sm justify-center border-slate-400 text-slate-600 shadow">
                        <span onClick={() => setModal(true)} className="border-r p-1 px-2 flex items-center justify-center border-slate-500 cursor-pointer"><IoMdAdd /></span>
                        <span className="border-r p-1 px-2 flex items-center justify-center  border-slate-500 cursor-pointer"><FiPrinter /></span>
                        <span className="p-1 flex px-2 items-center justify-center cursor-pointer"><IoSettingsOutline /></span>
                    </div>
                    {/* <AddButton onClick={() => setModal(true)} label="Section"></AddButton> */}
                </div>
                <Table>
                    <TableHeader>
                        <TableRow >
                            <TableHead>Section</TableHead>
                            <TableHead>Grade Level</TableHead>
                            <TableHead>Adviser</TableHead>
                            <TableHead>Students</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            gLevel != 0 ? section?.data?.filter((e: any) => e.gradeLevel == gLevel)?.map((value: any, index: number) => (
                                <TableRow className="odd:bg-slate-100">
                                    <TableData className={"pl-5"}>{value.sectionName} </TableData>
                                    <TableData className={"text-center"}>Grade {value.gradeLevel}</TableData>
                                    {value.faculty ? <TableData className={"text-center"}>{value.faculty.lastName} {value.faculty.firstName} {value.faculty.middleName}</TableData> :
                                        <TableData className={"text-center"}>Adviser Not Assigned</TableData>}
                                    <TableData className={"text-center"}>22</TableData>
                                    <TableData className={"text-center"}>
                                        <FlexContainer alignCenter>
                                            <ViewButton />
                                            <EditButton onClick={() => openEditModal(value.id)} />
                                        </FlexContainer>
                                    </TableData>
                                </TableRow>
                            )) : section?.data?.map((value: any, index: number) => (
                                <TableRow className="odd:bg-slate-100">
                                    <TableData className={"pl-5"}>{value.sectionName} </TableData>
                                    <TableData className={"text-center"}>Grade {value.gradeLevel}</TableData>
                                    {value.faculty ? <TableData className={"text-center"}>{value.faculty.lastName} {value.faculty.firstName} {value.faculty.middleName}</TableData> :
                                        <TableData className={"text-center"}>Adviser Not Assigned</TableData>}
                                    <TableData className={"text-center"}>{value.studentCount ? value.studentCount : "No Students Added"}</TableData>

                                    <TableData className={"text-center"}>
                                        <FlexContainer alignCenter>
                                            <ViewButton />
                                            <EditButton onClick={() => openEditModal(value.id)} />
                                        </FlexContainer>
                                    </TableData>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </SubContainer>
        </SectionContainer>
    )
}