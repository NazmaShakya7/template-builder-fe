import { forwardRef } from "react"

const InputField = forwardRef(({type='text', label, name, required=false, errorMessage, ...rest},ref,) => 
{
    return(
    <div className="pb-8 flex flex-col">
        <label className=" text-formText mb-2 font-medium ">{label}</label>
        <input className="text-blackText border border-formBorder-100 py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-violet-300" type={type} {...rest} name={name} required={required}></input>
        <span className="ml-2 text-xs italic text-rose-700 md:text-[11px] xs:text-[10px]">
            {errorMessage}
        </span>
    </div>
    )
}
)
export default InputField