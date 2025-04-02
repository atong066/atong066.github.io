import { useForm } from "react-hook-form"
import { useGetUserInfo, useLogin } from "../../../api/apiCall"
import { useNavigate } from "react-router"

export default function Login() {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const loginApi = useLogin()
    const userInfo = useGetUserInfo()
    function login(data: any) {
        loginApi.mutate(data, {
            onSuccess(data) {
                console.log(data.status)
                if (data.status === "success") {
                    console.log(data.status)
                    userInfo.refetch()
                    navigate('/home')
                }
                else
                    alert(data.msg)
            }
        })

    }
    return (
        <div className="w-full h-screen  bg-white flex items-center justify-center">
            <div className="absolute top-0 w-full h-[3rem] bg-blue-900"></div>
            <div className="w-[20rem] h-[25rem] p-5 shadow-2xl select-none rounded-xl border border-slate-300">
                <div className="text-center text-2xl font-semibold mb-5">Login</div>
                <div >
                    <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit(login)}>
                        <div className="flex flex-col gap-1">
                            <div className="text-slate-700">Username</div>
                            <div className="border border-slate-400 overflow-hidden rounded-sm">
                                <input {...register('username')} name="username" type="text" className="w-full p-1 px-2 outline-none" placeholder="Enter Username" id="" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-slate-700">Password</div>
                            <div className="border border-slate-400 overflow-hidden rounded-sm">
                                <input {...register('password')} type="password" className="w-full p-1 px-2 outline-none" placeholder="Enter Passwords" name="password" id="" />
                            </div>
                        </div>
                        <button className="w-full bg-blue-700 text-white p-2 rounded-md cursor-pointer">Login</button>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" />
                                <div>Remember Me</div>
                            </div>
                            <div>
                                <div className="underline cursor-pointer">Forgot Password</div>
                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}