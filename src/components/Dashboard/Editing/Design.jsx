import { useState } from "react"
import { CheckBox } from "../../../assets/AllSvg"
import img1 from "../../../assets/banner.png"
import img2 from "../../../assets/image2.png"
import img3 from "../../../assets/image3.png"
import Scroll from "../../Shared/ScrollArea"
export default function Design() {
    const [checked,setChecked]=useState(null)
    const handleChecked=(id)=>{
        setChecked(prevId=>prevId===id?null:id)
    }
    const layout= [
        {
          "id": 1,
          "img": img1
        },
        {
          "id": 2,
          "img": img2
        },
        {
          "id": 3,
          "img": img3
        }
      ]
      
    return(
        <div className="bg-white h-full border-l  border-formBorder">   
            <div className="bg-white py-5 px-6 border-b border-formBorder flex gap-5 items-center">
                <p className="text-blackText font-bold">
                    Select Your Design
                </p>
            </div>
                <div className="py-7 pl-4">
            <Scroll>
                { layout.map((item) => {
                        return(
                            <div className="flex gap-2 items-center mb-8" key={item.id} onClick={()=>handleChecked(item.id)}>
                                <CheckBox className={' h-6 w-6 rounded-md cursor-pointer'} checked={checked === item.id} />
                                <img src={item.img} className={`h-44 w-80 rounded-xl cursor-pointer border border-formBorder ${checked === item.id ? 'outline outline-primary' : ''}`} alt="" />
                            </div>
                        )
                    })}
            </Scroll>
                </div>
        </div>
    )
}