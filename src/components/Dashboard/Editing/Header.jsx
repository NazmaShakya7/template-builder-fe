import { Link } from "react-router-dom"
export default function Header() {
    return (
        <div className="bg-white py-7 px-6 border-b border-formBorder flex gap-5 items-center">
            <div className="text-formText">
                <Link className=" disabled mx-4">Components</Link>
                /
                <Link className="mx-4 text-blackText hover:text-primary">Home</Link>
                /
                <Link  className="mx-4 text-blackText hover:text-primary">Hero</Link>
            </div>
        </div>
    )
}