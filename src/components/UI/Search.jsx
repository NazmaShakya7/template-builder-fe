import { useState } from "react"
import { SearchIcon,UploadSvg } from "../../assets/AllSvg"
export default function Search({placeholder, className=''}) {
    const [search,setSearch]=useState('')
    return(
        <form onSubmit={e=>e.preventDefault} className="relative">
            <input type="text" className="bg-gray-100 placeholder-formText py-1 w-full rounded-xl pl-9 focus:outline-none focus:ring focus:ring-violet-300" value={search} placeholder={placeholder} name="search" onChange={e=>setSearch(e.target.value)}/>
            <SearchIcon className="absolute left-2 top-1.5 h-5 w-5 text-formText "/>
            {search ? (
                <button
                type="reset"
                className="absolute top-1 right-3 text-primary"
                onClick={() => setSearch('')}
                >
                X
                </button>
            ) : null}
        </form>
    )
}