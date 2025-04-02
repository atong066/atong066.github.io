import Navbar from "./navbar"
import Sidebar from "./sidebar"

interface props {
    children: React.ReactElement
}
export default function MainLayout(props: props) {
    return (
        <div className="flex w-full h-screen flex-col">
            <Navbar></Navbar>
            <div className="flex maincenter">
                <Sidebar></Sidebar>
                <section className="w-full h-full !p-5 overflow-auto scroll-smooth">
                    <div className="mainSection  rounded-[1rem] !p-4  !h-fit">
                        {props.children}
                    </div>

                </section>

            </div>

        </div>
    )
}