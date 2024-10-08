import SideBar from "../components/Dashboard/Editing/Sidebar/SideBar"
import Dashboard from "../components/Dashboard/Editing/Dashboard"
import Scroll from "../components/Shared/ScrollArea"

export default function EditPage() {  
    return(
        <div className="flex bg-white ">
             <div className="lg:w-1/6 md:w-1/5 w-1/3 bg-white">
                <SideBar/>
            </div>
            <div className="lg:w-5/6 md:w-4/5 w-2/3" >
                <Scroll>
                    <Dashboard/>
                </Scroll>
            </div>
        </div>
    )
}