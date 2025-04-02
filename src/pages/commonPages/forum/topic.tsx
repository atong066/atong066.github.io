import { MdForum } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import { useForumData, useUserData } from "../../../store/store";
import { IoMdAdd, IoMdArrowRoundBack } from "react-icons/io";
import { FcManager } from "react-icons/fc";
import { GrFormNextLink } from "react-icons/gr";
import Modal from "../../../components/modal";
import { useForm } from "react-hook-form";
import { useAddReply, useGEtReplies } from "../../../api/apiCall";
import { useEffect, useState } from "react";

export default function TopicForum() {
    const [modalStatus, setModalStatus] = useState(false)
    const repies = useGEtReplies()
    const postId = useParams()
    const navigate = useNavigate()
    const forumData = useForumData(state => state.data)
    function getReplies() {
        repies.mutate({ id: postId.subid })
    }
    useEffect(() => {
        getReplies()
    }, [])
    return (
        <>
            <NewReply getRep={getReplies} modalStatus={modalStatus} postid={postId.subid} modalController={setModalStatus}></NewReply>
            <div className="header h-12 flex items-center gap-2 justify-between">
                <div className="header flex flex-col items-center gap-2 relative">

                    <div className="flex gap-2 items-center">
                        <MdForum className="size-6 text-[#192a56]"></MdForum>
                        <div className="text-xl font-emibold text-[#192a56]">Forum</div>
                    </div>
                </div>
                <div className="flex">
                    <div onClick={() => navigate(-1)} className="flex items-center gap-2 text-xl cursor-pointer"><IoMdArrowRoundBack></IoMdArrowRoundBack><span>Back</span></div>
                </div>
            </div>
            <div className="line border border-[#192a56] rounded-full relative top-2"></div>
            <div className="relative top-4">
                <div className="w-full  ">
                    <div className="shadow-xl">
                        <div className="bg-blue-950 text-slate-50 p-2 font-semibold uppercase flex justify-between"><span>{forumData?.title}</span></div>
                        <div className="border border-slate-300 p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nihil distinctio eius, quam quidem nulla debitis asperiores vero. Earum cumque dolores, deserunt officiis distinctio voluptatem. Perspiciatis adipisci mollitia nemo vero.</div>
                    </div>
                    <div className="relative top-2">
                        <div className="bg-blue-950 ">
                            <div className="text-white p-2 flex justify-between"><span>Thread</span><button onClick={() => setModalStatus(true)} className="bg-green-800 px-2 rounded-sm cursor-pointer">New Reply</button></div>
                        </div>
                        {repies?.data?.map((value: any, index: any) => (
                            <div className="border border-slate-400 p-1 flex border-b-0 last:border-b">
                                <div className="flex flex-col items-center w-max p-2">
                                    <FcManager className="size-20"></FcManager>
                                    <div className="w-max">
                                        {value.user.username}
                                    </div>
                                    <div className="font-semibold text-sm">
                                        4th Year Student
                                    </div>
                                </div>
                                <div className="p-2">
                                    {value.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex relative top-5 gap-2 justify-end !pr-4 !pt-2 items-center text-lg mb-5">
                        <GrFormNextLink className="rotate-[180deg] cursor-pointer"></GrFormNextLink>
                        <div className="cursor-pointer border size-5 flex items-center justify-center bg-[#273c75] text-slate-100 !p-1">1</div>
                        <div className="cursor-pointer">2</div>
                        <div className="cursor-pointer">3</div>
                        <div className="cursor-pointer">4</div>
                        <div className="cursor-pointer">. . .</div>
                        <div className="cursor-pointer">9</div>
                        <div className="cursor-pointer">10</div>
                        <GrFormNextLink className="cursor-pointer"></GrFormNextLink>

                    </div>
                </div>
            </div>
        </>
    )
}

function NewReply({ modalStatus, postid, modalController, getRep }: any) {
    const { register, handleSubmit, reset } = useForm()
    const userInfo = useUserData(state => state.data)
    const addReply = useAddReply()
    function submit(data: any) {
        data.postId = postid
        data.userId = userInfo.id
        addReply.mutate(data, {
            onSuccess(data) {
                if (data.success) {
                    reset()
                    modalController(false)
                    getRep()

                }

            }
        })
    }
    return (
        <Modal closeModal={modalController} modalState={modalStatus} >
            <form className="w-full relative min-h-[14rem] select-none max-h-[25rem]" action="" onSubmit={handleSubmit(submit)}>
                <textarea {...register('content')} name="content" id="content" className="max-h-[22rem] border border-slate-500 w-full min-h-[15rem] outline-none" ></textarea>
                <button className="border cursor-pointer rounded-sm flex place-self-end  bottom-0 right-0 px-3 bg-green-900 text-white py-1">Reply</button>
            </form>
        </Modal>
    )
}