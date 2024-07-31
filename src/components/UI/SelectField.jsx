import { useState } from "react"

export default function SelectField({selectOptions,label,onChangeSelect,className}) {
    const [data,setData]=useState('')
    const handleSelect=(e)=>{
        onChangeSelect(e.target.value)
    }
    return(
        <select name={label.toLowerCase()} id={label.toLowerCase()} onChange={handleSelect} className={`${className}  focus:outline-none focus:ring focus:ring-violet-300`}>
            <option value="" disabled selected>{label}</option>
            {
                selectOptions.map((option,i)=> {
                    return <option value={option.value} key={i}>{option.label}</option>
                })
            }
        </select>
    )
}