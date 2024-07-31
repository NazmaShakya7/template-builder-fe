import { Link } from "react-router-dom"
import Button from "../UI/Button"
export default function TemplateCard({ template, handleSelect='',isSelected, className=''}) {
    console.log(template);
    return(
        <div className="cursor-pointer  ">
            {handleSelect == '' ?
             <div className="flex flex-col justify-center">
                <img src={template.image} className={`${className} rounded-3xl border-2 border-primaryBorder`} alt="" />
                <h2 className="text my-3 text-lg text-center">{template.title}</h2>
            </div>:
            <>
            <div className="flex flex-col justify-center" onClick={()=>handleSelect(template.id)}>
                <img src={template.image} className={`h-[375px]  rounded-3xl ${isSelected?'border-4  border-primary':'border-2 border-primaryBorder'} `} alt="" />
                <h2 className="text my-3 text-lg text-center">{template.title}</h2>
            </div>
            <Link to="/create-template">
                <div className={`flex justify-center ${isSelected ? '':'h-[30px]'}`}>
                    <Button type="submit" className={` ${isSelected ? 'visible':'hidden'} mb-5`}>
                        Select
                    </Button>
                </div>
            </Link>
            </>
            }
            
        </div>
    )
}