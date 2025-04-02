import { useState } from "react";
import Modal from "./modals/addStudentModal";
import ViewStudent from "./modals/viewStudentModal";
import AddButton, { FilterButton, ViewButton } from "../../../components/buttons";

import { useAddStudent, useDropDownState, useSection } from "../../../store/store";
import { EnrolledPill } from "../../../components/pill";
import Header from "../../../components/header";
import FilterModal from "./modals/filterModal";
import { studentList } from "./jsonData/fakeData";
import SectionContainer, { SubContainer } from "../../../components/sectionContainer";
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow } from "../../../components/table"
import DropDown from "../../../components/dropdown";
import { FiPrinter } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
export default function AdminStudentList() {
    const studentList = useAddStudent(state => state.data)
    const [modalState, setModalState] = useState(false)
    const [modalStateView, setModalStateView] = useState(false)
    const [modalFilter, setModalFilter] = useState(false)
    const sectionData = useSection(state => state.data)
    const dropdownState = useDropDownState(state => state.gradeLevel)
    const section = useDropDownState(state => state.section)
    const [search, setSearch] = useState()
    return (
        <SectionContainer className="space-y-3  h-fit mb-10">
            <Modal modalState={modalState} modalController={setModalState}></Modal>
            <FilterModal modalState={modalFilter} modalController={setModalFilter}></FilterModal>
            <ViewStudent modalState={modalStateView} modalController={setModalStateView}></ViewStudent>
            <Header label={"Student's List"}></Header>
            <SubContainer>
                <div className="flex gap-2 items-center justify-between px-2 drp">
                    <div className="flex gap-2 drpdwnGroup">
                        <DropDown label={"Grade Level"} placeholder={"Select Grade Level"}>
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
                        <DropDown label={"Section"} placeholder={"Select Section"}>
                            {
                                sectionData.map((value: any, index: any) => (
                                    <option key={index} value={value.sectionId}>{value.sectionName}</option>
                                ))
                            }

                        </DropDown>
                    </div>
                    <FilterButton onClick={setModalFilter}></FilterButton>
                    <div className="flex border items-center rounded-sm justify-center border-slate-400 text-slate-600 shadow">
                        <span onClick={() => setModalState(true)} className="border-r p-1 px-2 flex items-center justify-center border-slate-500 cursor-pointer"><IoMdAdd /></span>
                        <span className="border-r p-1 px-2 flex items-center justify-center  border-slate-500 cursor-pointer"><FiPrinter /></span>
                        <span className="p-1 flex px-2 items-center justify-center cursor-pointer"><IoSettingsOutline /></span>
                    </div>
                    {/* <AddButton onClick={setModalState}></AddButton> */}

                </div>
            </SubContainer>
            <SubContainer className="h-full">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead filter>Full Name</TableHead>
                            <TableHead filter className="!p-0">Grade Level</TableHead>
                            <TableHead filter className="max-[720px]:hidden !p-0">Section</TableHead>
                            <TableHead filter className="!p-0">Status</TableHead>
                            <TableHead filterclassName="!p-0">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {studentList.map((value: any, index: number) => (
                            <TableRow key={index}>
                                <TableData>
                                    <span className="flex gap-3">
                                        <span className=" size-9 rounded-full max-[620px]:hidden  overflow-hidden"><img src="/images/nobita.jpg" alt="" /></span>
                                        <span className="text-left flex flex-col justify-baseline w-fit min-[720px]:min-w-40">
                                            <span className="font-semibold">{value.lastName}</span>
                                            <span className="text-sm">{value.firstName} {value.middleName}</span>
                                        </span>
                                    </span>
                                </TableData>
                                <TableData> Grade {value.gradeLevel}</TableData>
                                <TableData className={"max-[720px]:hidden"}> Grade {index}</TableData>
                                <TableData> <EnrolledPill></EnrolledPill></TableData>
                                <TableData> <ViewButton onClick={() => setModalStateView(true)}></ViewButton></TableData>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </SubContainer>
        </SectionContainer >
    )
}