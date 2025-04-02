import { useNavigate, useParams } from "react-router";
import { useGetFacultyByID } from "../../../../api/apiCall";
import SectionContainer from "../../../../components/sectionContainer";
import { MdAlternateEmail, MdContactEmergency, MdEditNote, MdOutlineHistoryToggleOff } from "react-icons/md";
import { FaInfo, FaList } from "react-icons/fa6";
import { IoMdArrowRoundBack, IoMdTransgender } from "react-icons/io";
import { useEffect } from "react";
import { FlexContainer } from "../../../../components/flexContainer";
import { LuTrophy } from "react-icons/lu";
export default function ViewFaculty() {
    const navigate = useNavigate()
    const nav = useParams()
    const { data: facList, mutate } = useGetFacultyByID(nav.id)

    useEffect(() => {
        mutate({ id: nav.id })
    }, [])
    return (
        <SectionContainer>
            <div className="flex gap-2 items-center cursor-pointer text-[18px] pb-2" onClick={() => navigate(-1)}><IoMdArrowRoundBack /> Back</div>
            <div className="flex flex-col gap-3">
                <section className="flex gap-4  p-2 rounded-sm border-slate-300 ">
                    <div className="w-max min-w-max">
                        <img className="size-[10rem]" src="/images/nobita.jpg" alt="profilePic" />
                    </div>
                    <div>
                        <span className="flex items-center text-[1.1rem] font-semibold"><MdEditNote></MdEditNote>Personal Information</span>
                        <FlexContainer className={"flex-wrap"}>
                            <InfoContainer icon={<FaInfo />} label={"Name"}>
                                {facList?.lastName}  {facList?.firstName}  {facList?.middleName}
                            </InfoContainer>
                            <InfoContainer icon={<IoMdTransgender />} label={"Gender"}>
                                {facList?.gender}
                            </InfoContainer>
                            <InfoContainer icon={<MdAlternateEmail />} label={"Email"}>
                                {facList?.email}
                            </InfoContainer>
                            <InfoContainer icon={<MdContactEmergency />} label={"Contact Number"}>
                                {facList?.contactNumber}
                            </InfoContainer>
                            <InfoContainer icon={<MdContactEmergency />} label={"Address"}>
                                {facList?.address}
                            </InfoContainer>
                        </FlexContainer>
                    </div>
                </section>
                <section>
                    <div className="flex gap-2 border-b border-slate-500">
                        <span className="font-semibold p-2 border-b border-b-blue-700 cursor-pointer flex items-center gap-1">< FaList />Credentials</span>
                        <span className="font-semibold p-2  cursor-pointer flex items-center gap-1"><LuTrophy />Achievements</span>
                        <span className="font-semibold p-2  cursor-pointer flex items-center gap-1"><MdOutlineHistoryToggleOff />Employment History</span>
                    </div>
                </section>

            </div>

        </SectionContainer>
    )
}

function InfoContainer({ label, icon, children }: any) {
    return (
        <div className="space-y-2 flex-grow">
            <span className="font-semibold">{label}</span>
            <div className="border ml-1 rounded-xs flex items-center  border-slate-600 flex-grow min-w-[10rem] ">
                <div className="border-r p-2 w-fit border-slate-600 text-slate-600 ">{icon}</div>
                <div className="text-slate-700 px-2">
                    {children}
                </div>
            </div>
        </div>
    )
}