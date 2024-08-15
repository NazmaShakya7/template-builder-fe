import banner from "../../../assets/image2.png"
import Button from "../../UI/Button"
import Icon from "../../UI/Icon"
import {PencilSvg} from "../../../assets/AllSvg"
import { Arrow } from "../../../assets/AllSvg"
import { Trash } from "../../../assets/AllSvg"
import { useCompanyDeleteMutation } from "../../../hooks/useMutateData"
import { useNavigate } from 'react-router-dom';
export default function LandingCard({company}) {
    const navigate = useNavigate()
    const companyMutate = useCompanyDeleteMutation(company._id)
    console.log(company)
    const handleDelete = ()=>{
        companyMutate.mutate({
            onSuccess: ()=>{
                console.log("Successful")
            },
            onError: (err)=>{
                console.error(err, "-----error")
            }
        })
    }
    const handleNavigation=()=>{
        navigate(`/edit/${company?.template?._id}`);
    }
    return(
        <div className="bg-white p-4 rounded-3xl">
            <div className="mb-2 relative group/item cursor-pointer">
                <div className="relative">
                    <img src={banner} className="rounded-2xl border border-primaryBorder h-40" alt="" />
                    <Button variant="bordered" className="bg-primaryBorder hover:scale-125 rounded-[5px] px-1.5 py-1.5 z-50 absolute top-2 right-2"><Arrow/></Button>
                    {/* <span className="text-[8px] py-0 px-1 bg-primaryBorder rounded-xl font-semibold text-primary absolute bottom-2 left-2 z-50">Updated 2 hours ago</span> */}
                </div>
                <div className="bg-primary opacity-0 group-hover/item:opacity-40 top-0 left-0 absolute h-full w-full rounded-2xl flex flex-col justify-center items-center gap-y-1">
                </div>
                <div className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover/item:flex  hidden flex-col gap-2 absolute  ">
                    <Button variant="bordered" className="border hover:scale-125 bg-white text-primaryLight px-6" onClick={handleNavigation}>Edit</Button>
                    {/* <Button variant="bordered" className="bg-none hover:scale-125 text-white underline">Duplicate</Button> */}
                </div>
                
            </div>
            <div className="align-baseline mt-3 mb-2">
                <h1 className="font-bold inline">{company?.name}</h1>
                <Icon icon={<PencilSvg/>} className="float-right"/>
            </div>
            <div className="align-baseline my-3">
                <p className=" inline">{company?.slug}</p>
                <Icon icon={<PencilSvg/>} className="float-right "/>
            </div>
            <div className="flex mb-3 items-center ">
                <div className="w-1/3">
                    <p>Category</p>
                </div>
                <div className="w-2/3 bg-primaryBorder rounded-2xl px-3 py-1">
                    <p>{company?.template?.category}</p>
                </div>
            </div>
            <div className="flex gap-2 items-center justify-between">
                <Button variant="bordered" className="border border-primaryLight hover:bg-primaryLight hover:text-white  text-primaryLight px-6" onClick={handleNavigation}>Edit</Button>
                <Button variant="bordered" className="border border-green-600 hover:bg-green-600 hover:text-white text-green-600 px-7">Published</Button>
                <Icon icon={<Trash/>} onClick={()=>{handleDelete()}}/>
            </div>
        </div>
    )
}