import { Navigate, Outlet } from "react-router-dom"
import MainLayout from "../layout"
import { useUserData } from "../store/store"
export default function PrivateRoute() {
    const userInfo = useUserData(state => state.data)
    return (
        <>
            {userInfo.isLogedIn ?
                <MainLayout><Outlet></Outlet ></MainLayout> :
                <Navigate to="/" />

            }
        </>


    )
}