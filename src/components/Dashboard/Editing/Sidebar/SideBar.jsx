import React, { useState, useEffect } from 'react';
import Button from '../../../UI/Button';
import SideBarItem from './SideBarItem';
import { Eye, LeftArrow } from '../../../../assets/AllSvg';
import { LeftPointer } from '../../../../assets/AllSvg';
import { Link, useParams } from 'react-router-dom';
import Scroll from '../../../Shared/ScrollArea';
import { useSectionData } from '../../../../hooks/useQueryData';

export default function SideBar({handleActive, nav, active, handleUpdate}) {
  const {id}=useParams()
  const {data}= useSectionData(id,active)
  console.log("----active-----",data)

  // const [navItems,setNavItems] = useState( 
  //   [
  //     {
  //       id: 1,
  //       label: 'Navigation Bar',
  //       subItems: [
  //         { id: 1.1, label: 'Subitem 1' },
  //         { id: 1.2, label: 'Subitem 2' },
  //         { id: 1.3, label: 'Subitem 3' },
  //         { id: 1.4, label: 'Subitem 4' },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       label: 'Home',
  //       subItems: [
  //         { id: 2.1, label: 'Subitem 1' },
  //         { id: 2.2, label: 'Subitem 2' },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       label: 'About',
  //       subItems: [
  //         { id: 3.1, label: 'Subitem 1' },
  //         { id: 3.2, label: 'Subitem 2' },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       label: 'Services',
  //       subItems: [
  //         { id: 4.1, label: 'Subitem 1' },
  //         { id: 4.2, label: 'Subitem 2' },
  //       ],
  //     },
  //     {
  //       id: 5,
  //       label: 'Blog',
  //       subItems: [
  //         { id: 5.1, label: 'Subitem 1' },
  //         { id: 5.2, label: 'Subitem 2' },
  //       ],
  //     },
  //     {
  //       id: 6,
  //       label: 'Contact',
  //       subItems: [
  //         { id: 6.1, label: 'Subitem 1' },
  //         { id: 6.2, label: 'Subitem 2' },
  //       ],
  //     },
  //     {
  //       id: 7,
  //       label: 'Footer',
  //       subItems: [
  //         { id: 7.1, label: 'Subitem 1' },
  //         { id: 7.2, label: 'Subitem 2' },
  //       ],
  //     },
  //   ]);

  
  return (
    <div className='py-9  border border-formBorder border-r h-screen overflow-hidden relative'>
      <div className=' '>
        <Scroll className={'px-5'} height={'h-[500px]'}>
          <Link to='/' className='group text-blackText hover:text-primaryLight transition ease-in-out duration-200 flex gap-2 items-center mb-5 cursor-pointer'>
            <LeftPointer className={'group-hover:scale-125'} /> Dashboard
          </Link>
          <Button variant='bordered' className="bg-white border border-primary text-primary hover:bg-primary hover:text-white w-full  mb-8">
            Site Settings
          </Button>
          <div >
            <p className="text-formText mb-1.5">Components</p>
            {/* {
                  navItems.map((nav)=> <SideBarItem active={active} setNavItems={setNavItems} navItems={navItems} id={nav.id} handleActive={handleActive} label={nav.label}/>)
              } */}
            {nav.map((nav) => {
              return <li className={`list-none w-full relative pl-6 py-1.5 cursor-pointer ${active === nav.id ? 'bg-primaryBorder rounded-2xl' : ''} pr-3`} onClick={() => {
                  handleActive(nav.id)
                }} key={nav.id}>
                {nav.label}
                {/* <Eye className={'absolute right-1 top-1/2 -translate-y-1/2 h-3.5 w-3.5'} /> */}
              </li>
            })}
          </div>
        </Scroll>
      </div>
      <div className='absolute bottom-0 left-0 w-full bg-white z-40 pb-6 h-1/6 px-5 '>
        {/* <span className="text-[8px] py-0 px-1 bg-primaryBorder rounded-xl font-semibold text-primary ">Updated 2 hours ago</span> */}
        <Button variant='bordered' className="border border-primaryLight hover:bg-primaryLight hover:text-white text-primaryLight w-full mb-4" onClick={handleUpdate}>
          Update
        </Button>
        <Button variant='bordered' className="border border-green-600 hover:bg-green-600 hover:text-white text-green-600 w-full ">
          Published
        </Button>
      </div>
    </div>

  )
}