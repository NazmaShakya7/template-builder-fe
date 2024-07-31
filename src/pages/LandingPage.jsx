import Dashboard from "../components/Dashboard/Landing/Dashboard";
import SideBar from "../components/Dashboard/Landing/Sidebar/SideBar";
import { useState } from "react";
export default function LandingPage() {
    const [openTab,setOpenTab]= useState('All')  
    const tabs = [
        { name: 'All'},
        { name: 'Restaurants'},
        { name: 'Lawyers' },
        { name: 'Accountants'},
        { name: 'Uncategorized'}
    ];
    return(
        <div className="flex bg-gray-100 h-screen">
            <div className="lg:w-1/6 md:w-1/5 w-1/3 bg-white">
                <SideBar tabs={tabs} openTab={openTab} setOpenTab={setOpenTab} />
            </div>
            <div className="lg:w-5/6 md:w-4/5 w-2/3" >
                <Dashboard openTab={openTab}/>
            </div>
        </div>
    )
}