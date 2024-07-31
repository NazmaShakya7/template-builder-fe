import { useState } from "react"
import Button from "../../../UI/Button"
import { PencilSvg, Trash } from "../../../../assets/AllSvg";

export default function SideBar({tabs='',openTab='',setOpenTab='',view}) {

    return(
        <div className="py-9 px-5 ">
            {(view === 'edit')?
            (
            <>
                <Button variant='bordered' className="bg-white border border-primary text-primary w-full mb-8">
                    Site Settings
                </Button>
                <div className="mb-5">
                    <p className="text-formText">Categories</p>
                </div>
            </>
            ) :
            (
                <Button variant='bordered' className="bg-white border border-primary text-primary w-full mb-8">
                    Create New Website
                </Button>
            )
            }
            
            <div className="mb-5">
                {
                    (view === 'edit')?
                    (
                        <p>Edit page</p>
                    ):
                    (
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
                    )
                }
            </div>
        </div>
    )
}