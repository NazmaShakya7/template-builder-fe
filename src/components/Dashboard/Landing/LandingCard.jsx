import banner from "../../../assets/banner.png"
import Button from "../../UI/Button"
import Icon from "../../UI/Icon"
import {PencilSvg} from "../../../assets/AllSvg"
import { Trash } from "../../../assets/AllSvg"
export default function LandingCard() {
    return(
        <div className="bg-white p-4 rounded-3xl">
            <div className="mb-2 relative group/item">
                <img src={banner} className="rounded-2xl border border-primaryBorder h-40" alt="" />
                <div className="bg-primary opacity-0 group-hover/item:opacity-60 top-0 left-0 absolute h-full w-full rounded-2xl flex flex-col justify-center items-center gap-y-1">
                    <Button variant="bordered" className="border bg-white text-primaryLight px-6">Edit</Button>
                    <Button variant="bordered" className="bg-transparent text-white ">Duplicate</Button>
                </div>
            </div>
            <div className="align-baseline mt-3 mb-2">
                <h1 className="font-bold inline">Lawyers Website</h1>
                <Icon icon={<PencilSvg/>} className="float-right"/>
            </div>
            <div className="align-baseline my-3">
                <p className=" inline">/lawyers-website</p>
                <Icon icon={<PencilSvg/>} className="float-right"/>
            </div>
            <div className="flex mb-3 items-center">
                <div className="w-1/3">
                    <p>Category</p>
                </div>
                <div className="w-2/3 bg-primaryBorder rounded-2xl px-3 py-1">
                    <p>Lawyers</p>
                </div>
            </div>
            <div className="flex gap-2 items-center justify-between">
                <Button variant="bordered" className="border border-primaryLight  text-primaryLight px-6">Edit</Button>
                <Button variant="bordered" className="border border-green-600 text-green-600 px-7">Published</Button>
                <Icon icon={<Trash/>} />
            </div>
        </div>
    )
}