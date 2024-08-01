import React, { useState } from 'react';
import Button from '../../../UI/Button';
import SideBarItem from './SideBarItem';

export default function SideBar() {
    const [navItems,setNavItems] = useState( [
        {
          id: 1,
          label: 'Navigation Bar',
          subItems: [
            { id: 1.1, label: 'Subitem 1' },
            { id: 1.2, label: 'Subitem 2' },
            { id: 1.3, label: 'Subitem 3' },
            { id: 1.4, label: 'Subitem 4' },
          ],
        },
        {
          id: 2,
          label: 'Home',
          subItems: [
            { id: 2.1, label: 'Subitem 1' },
            { id: 2.2, label: 'Subitem 2' },
          ],
        },
        {
          id: 3,
          label: 'About',
          subItems: [
            { id: 3.1, label: 'Subitem 1' },
            { id: 3.2, label: 'Subitem 2' },
          ],
        },
        {
          id: 4,
          label: 'Services',
          subItems: [
            { id: 4.1, label: 'Subitem 1' },
            { id: 4.2, label: 'Subitem 2' },
          ],
        },
        {
          id: 5,
          label: 'Blog',
          subItems: [
            { id: 5.1, label: 'Subitem 1' },
            { id: 5.2, label: 'Subitem 2' },
          ],
        },
        {
          id: 6,
          label: 'Contact',
          subItems: [
            { id: 6.1, label: 'Subitem 1' },
            { id: 6.2, label: 'Subitem 2' },
          ],
        },
        {
          id: 7,
          label: 'Footer',
          subItems: [
            { id: 7.1, label: 'Subitem 1' },
            { id: 7.2, label: 'Subitem 2' },
          ],
        },
      ]);
      
      
      const [active,setActive]=useState(null)
      const handleActive =(label)=>{
        setActive(prevLabel=>prevLabel === label? null : label)
      }
    return(
        <div className='py-9 px-5 border border-formBorder border-r h-full relative'>
            <Button variant='bordered' className="bg-white border border-primary text-primary w-full mb-8">
                Site Settings
            </Button>
            <div>
            <p className="text-formText mb-1.5">Components</p>
            {
                navItems.map((nav)=> <SideBarItem active={active} setNavItems={setNavItems} navItems={navItems} id={nav.id} handleActive={handleActive} label={nav.label}/>)
            }
            </div>
            <div className='absolute bottom-9 left-0 w-full  px-5 '>
              <Button variant='bordered' className="bg-white border border-primary text-primary w-full mb-4">
                  Update
              </Button>
              <Button variant='bordered' className="bg-white border border-primary text-primary w-full ">
                  Published
              </Button>
            </div>
        </div>
    )
}