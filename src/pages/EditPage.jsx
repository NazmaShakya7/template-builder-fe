import SideBar from "../components/Dashboard/Editing/Sidebar/SideBar"
import Dashboard from "../components/Dashboard/Editing/Dashboard"
import Scroll from "../components/Shared/ScrollArea"
import { useTemplateData } from "../hooks/useQueryData";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useSectionMutation } from "../hooks/useMutateData";

export default function EditPage() { 
  const {id} = useParams();
  const {data,isLoading} = useTemplateData(id)
  const [nav, setNav] = useState([])
  const [active, setActive] = useState(null)
  const sectionMutation = useSectionMutation(id,active,'PUT')  
    const [sectionData,setSectionData]= useState(null)
    useEffect(() => {
      if (data?.section) {
        const newNav = data.section.map((sec, index) => ({
          id: sec._id,
          label: sec.type
        }));
        setNav(newNav);
      }
      if (data?.section && data.section.length > 0) {
        setActive(data.section[0]._id);
      }
    }, [data]);
    const handleActive = (id) => {
      setActive(id)
    }
    const handleUpdate = ()=>{
      if (active && data?.section) {
        // Find the section data by active id
        const section = data.section.find(sec => sec._id === active);
        
        if (section) {
            sectionMutation.mutate({
                type: section.type,
                data: {
                  ...sectionData, 
                },
                order: section.order
            });
        } else {
            console.error('Active section not found.');
        }
    }
    }
    const handleData = (data)=>{
      setSectionData(data)
    }
    
    return(
        <div className="flex bg-white ">
             <div className="lg:w-1/6 md:w-1/5 w-1/3 bg-white">
              {isLoading ? 
              <p>Loading....</p> :
              <SideBar handleActive={handleActive} nav={nav} active={active} handleUpdate={handleUpdate}/>
            }
            </div>
            <div className="lg:w-5/6 md:w-4/5 w-2/3" >
                <Scroll>
                    <Dashboard active={active} handleData={handleData}/>
                </Scroll>
            </div>
        </div>
    )
}