import { closestCorners, DndContext, DragOverlay } from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import { Eye, LeftArrow } from '../../../../assets/AllSvg';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import { forwardRef } from 'react';
import { useCallback } from 'react';

export default function SideBarItem({ active, handleActive, label, id, navItems, setNavItems }) {
    const [activeId, setActiveId] = useState(null)
    const [ isDragging, setIsDragging]=useState(false)

    /*getid of parent and subnav */
    const getPos = (id) => {
        for (let i = 0; i < navItems.length; i++) {
            const subIndex = navItems[i].subItems.findIndex(item => item.id === id);
            if (subIndex !== -1) {
                return { parentIndex: i, subIndex };
            }
        }
        return null; 
    };

    /*set activeid to current selected dragged item */
    const handleDragStart = useCallback((event) => {
        setActiveId(event.active.id);
        setIsDragging(true)
        console.log(event)
    },[]);

    /* remove class of previous active item */
    useEffect(()=>{
        setActiveId(null)
    },[active])

    /*arrange array wrt to the dragged item */
    const handleDragEnd =  useCallback((event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const activePos = getPos(active.id);
        const overPos = getPos(over.id);

        /*ensure if the item is being arranged within same parent */
        if (activePos && overPos && activePos.parentIndex === overPos.parentIndex) {
            setNavItems((prevNavItems) => {
                const newNavItems = [...prevNavItems];
                const subItems = newNavItems[activePos.parentIndex].subItems;
                newNavItems[activePos.parentIndex].subItems = arrayMove(subItems, activePos.subIndex, overPos.subIndex);
                return newNavItems;
            })
        }
        setIsDragging(false)
    },[])
    return (
        <>
            <li className='list-none w-full relative pl-6 py-1.5 cursor-pointer pr-3' onClick={() => handleActive(label)} key={id}>
                <LeftArrow className={`absolute ${(active === label) ? 'rotate-90' : ''} left-1 top-1/2 -translate-y-1/2 h-2.5 w-2.5 cursor-pointer transition ease-out duration-200`} />
                {label} <Eye className={'absolute right-1 top-1/2 -translate-y-1/2 h-3.5 w-3.5'} />
            </li>
            {active === label &&
                <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
                    <SubNav active={active} navItems={navItems} activeId={activeId} isDragging={isDragging}/>
                </DndContext>
            }
        </>
    )
}

export const SubNav = ({ active, navItems,activeId, isDragging }) => {
    return (
        <div className=''>
            {navItems.map((items) => {
                return (
                    <>
                    {active === items.label && (
                        <div key={items.id}>
                            <SortableContext items={items.subItems} strategy={verticalListSortingStrategy}>
                                {items.subItems.map((subitem) => (
                                    <>
                                        <SubNavItem activeId={activeId} label={subitem.label} id={subitem.id} key={subitem.id} isDragging={isDragging}/>
                                    </>
                                ))}
                            </SortableContext>
                            {/* <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
                                {activeId ? <Item id={activeId} label={items.subItems.filter((item)=>item.id === activeId).map(item=>item.label).toString()} isDragging={isDragging}/>  : null}
                            </DragOverlay> */}
                        </div>
                    )}
                    </>
                )
            })
        }
    </div>
    )
}

export const SubNavItem = ({ id, label, isDragging , activeId}) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition || undefined,
    };

    return (
        <Item ref={setNodeRef} style={style} id={id} transition={transition} transform={transform} label={label} isDragging={isDragging} activeId={activeId} {...attributes} {...listeners}
        />
    )
}

export const Item = forwardRef(({ id, label, isDragging,activeId, style, transition, transform, ...props }, ref) => {
    const [hidden, setHidden] = useState(null);
    const inlineStyles = {
        transform: CSS.Transform.toString(transform),
        transition: transition || undefined,
        borderRadius: "10px",
        cursor: isDragging ? "grabbing" : "grab",
        background: isDragging || activeId
          ? "#E8E5EC"
          : '',
      }

      const handleHidden = useCallback((id, event) => {
        event.stopPropagation()
        setHidden(prevId => (prevId === id ? null : id))
    },[])
    return (
        <div className='flex justify-between items-center relative py-1.5 pl-9 px-2' ref={ref} style={id === activeId ? inlineStyles : style} >
            <li {...props} className={`list-none  w-full  ${isDragging ? 'cursor-grabbing b' :'cursor-grab'}   ${hidden === id ? 'text-formText' : ''}`} >
            <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-3/5 w-1.5 rounded-2xl ${(activeId === id) ? 'bg-primary' :''}`} ></span>
                {label}
            </li>
            <button onClick={(event) => handleHidden(id, event)} className=' h-4 w-4 z-20  transition ease-in duration-75 cursor-pointer hover:scale-125'>
                <Eye hidden={hidden === id}  />
            </button>
        </div>
    )
})