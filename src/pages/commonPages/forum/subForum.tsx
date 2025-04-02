import { MdForum } from "react-icons/md";
import SearchBar from "../../../components/searchbar";
import { useForumData, useModalState, useUserData } from "../../../store/store";
import { IoMdAdd } from "react-icons/io";
import { format } from "date-fns"
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router";
import { useAddPost, useAddPostTopic, useGetForumData, useGetSub, useGetTopicByID } from "../../../api/apiCall";
import { GrFormNextLink } from "react-icons/gr";
import Input from "../../../components/input";
import Modal from "../../../components/modal";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
export default function SubForum() {
    const navigate = useNavigate()
    const subTopic = useGetTopicByID()
    const forumData = useForumData(state => state.data)
    const forumDataiD = useForumData(state => state.id)
    const sub = useGetSub()
    const [modalState, setModalState] = useState(false)
    function getTopic(data: any) {
        const link = data?.title.replace(" ", "-")
        subTopic.mutate({ id: data.id })
        navigate('./' + data.id)
    }
    useEffect(() => {
        sub.mutate({ id: forumDataiD })
    }, [modalState])
    return (
        <>
            <ModalComponent modalState={modalState} modalController={setModalState}></ModalComponent>
            <div className="header h-12 flex items-center gap-2 justify-between">
                <div className="header flex flex-col items-center gap-2 relative">
                    <div onClick={() => navigate(-1)} className="absolute -top-8 flex items-center gap-2 text-xl cursor-pointer"><IoMdArrowRoundBack></IoMdArrowRoundBack><span>Back</span></div>
                    <div className="flex">
                        <MdForum className="size-6 text-[#192a56]"></MdForum>
                        <div className="text-xl font-emibold text-[#192a56]">Forum</div>
                    </div>


                </div>
                <div className="flex">
                    <SearchBar placeHolder="Seach forum" ></SearchBar>
                    <button onClick={() => setModalState(true)} className="flex w-full items-center gap-2 justify-between border rounded-md shadow-xl text-white bg-[#40739e] !px-2 !py-1 cursor-pointer border-none ">Add <IoMdAdd className="cursor-pointer size-5"></IoMdAdd></button>
                </div>
            </div>
            <div className="line border border-[#192a56] rounded-full relative top-2"></div>
            <div className="relative top-3">
                <div className="w-full  ">
                    <div className="bg-blue-900 text-slate-50 p-2 font-semibold uppercase"><span>{forumData?.title}</span></div>
                    {
                        forumData?.posts?.slice(0, 9).map((value: any, index: any) => (
                            <div key={index} className="flex border border-b-0 last:border-b even:bg-slate-100">
                                <div className="border-r-[.05rem] border-b-blue-950 w-14 flex items-center p-2 ">
                                    <MdForum className="size-8 text-[#192a56]"></MdForum>
                                </div>
                                <div className="pl-2 flex flex-col w-full">
                                    <div><span className="font-semibold underline cursor-pointer text-lg w-fit" onClick={() => getTopic(value)}>{value.title}</span></div>
                                    <span className="font-normal">{value.desctiption}</span>
                                </div>
                                <div className="flex flex-col w-62 gap-2 border-r-[.05rem] border-b-blue-950 !pr-2">
                                    <span >by: <span className="underline"> {value?.user?.username}</span></span>
                                    <span className="text-sm text-right">{format(value.createdAt, 'MM-dd-yyyy hh:mm')}</span>
                                </div>
                                <div className="flex items-center w-20 justify-center">
                                    2104
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex relative top-5 gap-2 justify-end !pr-4 !pt-2 items-center text-lg">
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
        </>
    )
}
function ModalComponent({ modalState, modalController }: any) {
    const { register, handleSubmit, reset } = useForm()
    const { refetch } = useGetForumData()
    const addPost = useAddPostTopic()
    const userInfo = useUserData(state => state.data)
    const forumData = useForumData()
    function onSubmit(data: any) {
        const date = new Date()
        const payload = {
            title: data.title,
            type: 1,
            topicId: forumData.id,
            desctiption: data.description,
            userId: userInfo.id,
            content: data.content,
            created_at: date

        }
        addPost.mutate(payload, {
            onSuccess(data, variables) {
                // useForumData.setState((prev) => prev.append(variables))
                refetch()
                reset()
                modalController(false)
            }
        })
    }
    return (
        <Modal modalState={modalState} openModal={() => useModalState.setState({ status: true })} closeModal={() => modalController(false)}>
            <form action="" className="space-y-2 " onSubmit={handleSubmit(onSubmit)}>
                <Input name="title" reg={register} placeholder="Topic Title"></Input>
                <Input name="description" reg={register} placeholder="Description"></Input>
                <Input type="textarea" classname="h-20" name="content" reg={register} placeholder="Content"></Input>
                <button type="submit" className="border px-2 py-1 rounded-md w-full cursor-pointer bg-[#27ae60] text-white">Add</button>
            </form>
        </Modal>

    )
}