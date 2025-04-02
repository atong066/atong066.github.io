import BoxContainer from "../../../components/boxContainer";
import Input, { InputInfo, TextAreaInfo } from "../../../components/input";
import { Modal2 } from "../../../components/modal";
import ProfilePicture from "../../../components/profilePic";
import SectionContainer from "../../../components/sectionContainer";
import { CiEdit } from "react-icons/ci";
import { GrContactInfo } from "react-icons/gr";
import EditProfileModal from "./modals/editprofilemodal";
import { useState } from "react";
export default function AdminProfile() {
    const [edit, setEdit] = useState(false)
    return (
        <SectionContainer className="flex flex-col gap-1 overflow-auto h-full pb-10" >

            <EditProfileModal modalState={edit} setModalState={setEdit}></EditProfileModal>
            <BoxContainer className="relative flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-900 text-white">
                <div onClick={() => setEdit(true)} className="absolute right-1 top-1  cursor-pointer flex items-center gap-1"><CiEdit className="text-xl cursor-pointer"></CiEdit><span className="font-bold">Edit</span></div>
                <ProfilePicture className="size-20" src={'/images/nobita.jpg'}></ProfilePicture>
                <article className="flex flex-col">
                    <span className="text-2xl font-semibold">Galicia</span>
                    <span className="text-xl">Virgilio Sales</span>
                    <span className="text-md italic font-semibold">Admin</span>
                </article>
            </BoxContainer>
            <BoxContainer className="!shadow-none !border-none">
                <div className="flex items-center gap-2 font-semibold"><GrContactInfo></GrContactInfo><span className="">Personal Information</span> </div>
                <div className="gridContainer">
                    <InputInfo label="Birth Date" type="date" value={"1994-03-10"} disabled={true} placeholder={""}></InputInfo>
                    <InputInfo label="Gender" value={"Male"} disabled={true} placeholder={""}></InputInfo>
                    <InputInfo label="Contact Number" value={"09603877103"} disabled={true} placeholder={""}></InputInfo>
                    <InputInfo label="Email" value={"vg03101994@yahoo.com"} disabled={true} placeholder={""}></InputInfo>
                    <TextAreaInfo label="Address" value={"102 Inaldo St. Bonfal East Bayombong Nueva Vizcaya"} disabled={true} placeholder={""}></TextAreaInfo>


                </div>
            </BoxContainer>

        </SectionContainer>
    )
}