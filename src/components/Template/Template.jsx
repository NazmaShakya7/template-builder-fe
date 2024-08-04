import { useState } from "react";
import template1 from '../../assets/template1.png'
import template2 from '../../assets/template2.png'
import template3 from '../../assets/template3.png'
import template4 from '../../assets/template4.png'
import TemplateCard from "./TemplateCard";
const templates = [
    { id: 1, title: "Template A", image: template1 },
    { id: 2, title: "Template B", image: template2 },
    { id: 3, title: "Template C", image: template3 },
    { id: 4, title: "Template D", image: template4 },
    { id: 5, title: "Template E", image: template1 },
    { id: 6, title: "Template F", image: template2 },
    { id: 7, title: "Template G", image: template3 },
    { id: 8, title: "Template H", image: template4 },
  ];
export default function Template() {
    const [selectId,setSelect]=useState(1)
    function handleSelect(id){
        setSelect(id)
    }
    return(
        <div className="grid lg:grid-cols-4 lg:gap-9 grid-cols-1 md:grid-cols-2 md:gap-4  mx-auto">
            {
                templates.map((template,i)=>{
                    return <TemplateCard template={template} key={i} handleSelect={handleSelect} isSelected={selectId === template.id}/>
                })
            }
        </div>
    )
}