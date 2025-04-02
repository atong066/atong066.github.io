import { MdForum } from "react-icons/md";
import SearchBar from "../../../components/searchbar";
import { IoMdAdd } from "react-icons/io";
import { useAddPost, useGetForumData, useGetSub } from "../../../api/apiCall";
import Input from "../../../components/input";
import { useForm } from "react-hook-form"
import { useForumData, useModalState, useUserData } from "../../../store/store";
import Modal from "../../../components/modal";
import { useNavigate, useParams } from "react-router";
import { GrFormNextLink } from "react-icons/gr";
import { format } from "date-fns";
function ForumItem({ data }: any) {
    const link = data?.title.replace(" ", "-")
    const subData = useGetSub()
    const navigate = useNavigate()
    function goToLink(data: any, link: string) {
        useForumData.setState({ id: data?.id })
        subData.mutate({ id: data?.id, forumType: data.forumType })
        navigate(link)
    }
    return (
        <div className="flex border-b-[.05rem] last:border-0 bg-slate-100">
            <div className="border-r-[.05rem] border-b-blue-950 w-14 flex items-center p-2 ">
                <MdForum className="size-8 text-[#192a56]"></MdForum>
            </div>
            <div className="pl-2 flex flex-col w-full">
                <div onClick={() => goToLink(data, link.toLowerCase())}><span className="font-semibold underline cursor-pointer text-lg w-fit">{data.title}</span></div>
                <span className="font-normal">{data.description}</span>
            </div>
            <div className="flex flex-col w-62 gap-2 border-r-[.05rem] border-b-blue-950 !pr-2">
                <span >by: <span className="underline"> {data.username}</span></span>
                <span className="text-sm text-right">{format(data.createdAt, 'MM-dd-YYY hh:mm:ss')}</span>
            </div>
            <div className="flex items-center w-20 justify-center">
                210
            </div>
        </div>
    )
}
function ForumSection({ title, data, type }: any) {
    return (
        <div className="w-full  h-fit border">
            <div className="flex justify-between">
                <div className="w-full h-fit p-2 bg-blue-950 text-white font-semibold">{title}</div>
                <div className="text-end  !pr-2 w-full h-fit p-2 bg-blue-950 text-white font-semibold">{type === 2 ? "Replies" : "Threads"}</div>
            </div>
            <div>
                {
                    data?.map((value: any, index: number) => (
                        <ForumItem data={value}></ForumItem>
                    ))
                }
            </div>
        </div>
    )
}

function ModalComponent() {
    const { register, handleSubmit, reset } = useForm()
    const { refetch } = useGetForumData()
    const modalState = useModalState(state => state.status)
    const addPost = useAddPost()
    const userInfo = useUserData(state => state.data)

    function onSubmit(data: any) {
        const date = new Date()
        const payload = {
            title: data.title,
            type: 1,
            description: data.description,
            username: userInfo.username,
            content: data.content,
            created_at: date

        }
        console.log(data)
        addPost.mutate(payload, {
            onSuccess(data) {
                refetch()
                reset()
                useModalState.setState({ status: false })
            }
        })
    }
    return (
        <Modal modalState={modalState} openModal={() => useModalState.setState({ status: true })} closeModal={() => useModalState.setState({ status: false })}>
            <form action="" className="space-y-2 " onSubmit={handleSubmit(onSubmit)}>
                <Input name="title" reg={register} placeholder="Topic Title"></Input>
                <Input name="description" reg={register} placeholder="Description"></Input>
                <Input type="textarea" classname="h-20" name="content" reg={register} placeholder="Content"></Input>
                <button type="submit" className="border px-2 py-1 rounded-md w-full cursor-pointer bg-[#27ae60] text-white">Add</button>
            </form>
        </Modal>

    )
}
export default function Forum() {
    const { data: forumData } = useGetForumData()
    return (
        <div className="h-full flex flex-col">
            <ModalComponent></ModalComponent>
            <div className="header h-12 flex items-center gap-2 justify-between">
                <div className="header flex items-center gap-2">
                    <MdForum className="size-6 text-[#192a56]"></MdForum>
                    <div className="text-xl font-emibold text-[#192a56]">Forum</div>
                </div>
                <div className="flex">
                    <SearchBar placeHolder="Seach forum" ></SearchBar>
                    <button onClick={() => useModalState.setState({ status: true })} className="border-none flex w-full items-center gap-2 justify-between border rounded-md shadow-xl text-white bg-[#40739e] !px-2 !py-1 cursor-pointer ">Add <IoMdAdd className="cursor-pointer size-5"></IoMdAdd></button>
                </div>

            </div>
            <div className="line border border-[#192a56] rounded-full relative top-2"></div>
            <div className="relative top-4 space-y-2  h-full ">
                <ForumSection data={forumData} type={1} title="General Topics"></ForumSection>
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
        </div >
    )
}

