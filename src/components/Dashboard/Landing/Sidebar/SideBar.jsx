import { useState } from "react"
import Button from "../../../UI/Button"
import { PencilSvg, Trash } from "../../../../assets/AllSvg";
import { Link } from "react-router-dom";
import { LeftPointer } from "../../../../assets/AllSvg";
import Popup from "../Modal";
export default function SideBar({}) {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setOpen(false);

    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    return(
        <div className="py-9 px-5 relative h-screen">
      
                <Button variant='bordered' onClick={showModal} className="bg-white border border-primary hover:bg-primary hover:text-white   text-primary w-full mb-8">
                    Create New Company
                </Button>
                <Popup open={open} handleOk={handleOk} handleCancel={handleCancel}  />
            {/* <div className="mb-5">
                <ul>
                {
                    tabs.map((category)=>{
                        return <li className={`list-none pl-6 pr-3 py-1.5 my-1  cursor-pointer flex items-center justify-between ${(openTab === category.name) ? 'bg-primaryBorder rounded-xl relative': ''}`}  key={category.name} onClick={()=>setOpenTab(category.name)}> 
                        <span className={`absolute left-0 top-2 h-3/5 w-1.5 rounded-2xl ${(openTab === category.name) ? 'bg-black' :''}`} ></span> {category.name}
                        <div className={`float-right flex gap-0.5 ${openTab === category.name ? 'visible' : 'hidden'}`}>
                            <span className="px-1.5 py-1 hover:bg-white rounded-lg">
                                <PencilSvg/>
                            </span>
                            <span className="px-1.5 py-1 hover:bg-white rounded-lg">
                                <Trash/>
                            </span>
                        </div>
                        </li>
                    })
                }
                </ul>
            </div> */}
            <div className='absolute bottom-0 left-0 w-full bg-white z-40 py-6  px-5 '>
            <Link to='/' className='group text-blackText hover:text-primaryLight transition ease-in-out duration-75 flex gap-2 items-center cursor-pointer'>
                <LeftPointer className={'group-hover:scale-125'}/> Logout
              </Link>
            </div>
        </div>
    )
}