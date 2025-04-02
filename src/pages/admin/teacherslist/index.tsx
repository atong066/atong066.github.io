import SectionContainer, { SubContainer } from "../../../components/sectionContainer"
import Header from "../../../components/header"
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow } from "../../../components/table"
import { ActivePill, Resigned } from "../../../components/pill"
import AddButton, { ControllButton, DeleteButton, EditButton, ViewButton } from "../../../components/buttons"
import { FlexContainer } from "../../../components/flexContainer"
import DropDown from "../../../components/dropdown"
import AddFacultyModal from "./modals/addFaculty"
import { useFaculty } from "../../../store/store"
import { useState } from "react"
import { useArchiveFaculty, useGetFacultyList } from "../../../api/apiCall"
import UpdateFaculty from "./modals/updateFaculty"
import ViewFaculty from "./modals/viewFaculty"
import { useNavigate } from "react-router"

export const TeachersList = () => {
    const navigate = useNavigate()
    const [modalState, setModalState] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)
    const { data: facList, refetch: getFacultyList, isLoading } = useGetFacultyList()
    const archiveFaculty = useArchiveFaculty()
    const designation = (type: string) => {
        switch (type) {
            case "1":
                return "Adviser"
            case "2":
                return "Floating teacher"
            default:
                return "Not Assigned"
        }
    }
    function editEntry(id: string) {
        const faculty = facList?.data?.filter((e: any) => e.id == id)
        if (faculty) {
            useFaculty.setState({ teacher: faculty[0] })
            setUpdateModal(true)
        }
    }
    function viewFaculty(id: string) {
        navigate(`./${id}`)
    }
    function openModal() {
        useFaculty.setState({ teacher: undefined })
        setModalState(true)
    }
    function getStatus(status: string) {
        switch (status) {
            case "1":
                return "Employed"
            case "3":
                return "Terminated"
            case "2":
                return "Resigned"
            default:
                break
        }
    }
    function archiveFacty(id: string) {
        archiveFaculty.mutate({ id: id }, {
            onSuccess(data) {
                if (data.success)
                    getFacultyList()
            }
        })
    }

    return (
        <SectionContainer className="space-y-3  h-fit mb-10">
            <div>{isLoading}</div>
            <AddFacultyModal refresh={getFacultyList} setModalState={setModalState} modalState={modalState}></AddFacultyModal>
            <UpdateFaculty refresh={getFacultyList} setModalState={setUpdateModal} modalState={updateModal}></UpdateFaculty>
            <Header label={"Faculty List"} searchLabel={"Search Faculty"}></Header>
            <SubContainer>
                <FlexContainer spaceBetween className="justify-between">
                    <DropDown label={"Designation"} placeholder={"Choose Designation"}>
                        <option value="1">Adviser</option>
                        <option value="2">Floating Teacher</option>
                    </DropDown>
                    <ControllButton addAction={() => openModal()}></ControllButton>
                    {/* <AddButton label="Faculty"></AddButton> */}
                </FlexContainer>
            </SubContainer>
            <SubContainer>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead filter>Full Name</TableHead>
                            <TableHead filter>Contact Number</TableHead>
                            <TableHead filter>Designation</TableHead>
                            <TableHead filter>Department</TableHead>
                            <TableHead filter>Status</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {facList?.data?.filter((e: any) => e.empStatus === "1").map((value: any, index: number) => (
                            <TableRow tableKey={index}>
                                <TableData className="pl-2 flex gap-1"><span className="font-semibold">{value.lastName},</span>{value.firstName}{value.middelName}</TableData>
                                <TableData className="pl-2">{value.contactNumber}</TableData>
                                <TableData className="pl-2">{designation(value.designation)}</TableData>
                                <TableData className="pl-2">{designation(value.designation)}</TableData>
                                <TableData className={`!text-center !p-0 text-white !py-0 ${value?.status === "1" ? "bg-[#27ae60]" : value?.status === "3" ? "bg-[#c0392b]" : "bg-[#d35400]"}`}>

                                    {getStatus(value?.status)}

                                </TableData>
                                <TableData>
                                    <FlexContainer alignCenter>
                                        <ViewButton onClick={() => viewFaculty(value.id)}></ViewButton>
                                        <EditButton onClick={() => editEntry(value.id)}></EditButton>
                                        <DeleteButton onClick={() => archiveFacty(value.id)}></DeleteButton>
                                    </FlexContainer>
                                </TableData>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </SubContainer>
        </SectionContainer >
    )
}