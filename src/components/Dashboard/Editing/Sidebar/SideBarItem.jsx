// import {closestCorners, DndContext} from '@dnd-kit/core';
// import {Draggable} from './Draggable';
// import {Droppable} from './Droppable';
import { useState } from 'react';
import { Eye, LeftArrow } from '../../../../assets/AllSvg';
export default function SideBarItem({active, handleActive, label, id, navItems}) {

    // <DndContext collisionDetection={closestCorners}>
            
    // </DndContext>
    return(
        <>
            <li className='list-none w-full relative pl-6 py-1.5 cursor-pointer pr-3 ' onClick={()=>handleActive(label)} key={id}><LeftArrow className={`absolute ${(active === label) ? 'rotate-90': ''}  left-1 top-1/2 -translate-y-1/2 h-2.5 w-2.5 cursor-pointer transition ease-out duration-200`}/>{label} <Eye className={'absolute right-1 top-1/2 -translate-y-1/2 h-3.5 w-3.5'}/></li>
            {active === label && <SubNav active={active} navItems={navItems}/>}
        </>
    ) 
}
export const SubNav = ({active,navItems}) => {
    return (
        <div className=''>
            {
                navItems.map((items)=>{
                    return <>
                    {active === items.label && (
                        <div>{items.subItems.map((subitem)=>{
                            return (
                                    <SubNavItem label={subitem.label} key={subitem.id}/>
                            )
                        })}</div>
                    )}
                    </>
                })
            }

        </div>
    )
}
export const SubNavItem=({label})=>{
    const [hidden,setHidden]=useState(false)
    console.log("---hidden",hidden)
    return (
        <li className={`list-none py-1.5 pl-10 pr-4  w-full relative cursor-pointer ${hidden ? 'text-formText' : ''}`} >{label} 
        <span onClick={() => setHidden(prevHidden => !prevHidden)}>
            <Eye  hidden={hidden} className='absolute right-1 top-1/2 -translate-y-1/2 h-3.5 w-3.5 '/>
        </span> 
        </li>
    )
}