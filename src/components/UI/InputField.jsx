import { forwardRef } from "react"

const InputField = forwardRef(({type='text', label, errorMessage, ...rest},ref,) => 
{
    return(
    <div className="pb-8 flex flex-col">
        <label className=" text-formText mb-2 ">{label}</label>
        <input type='text' className="text-blackText border border-formBorder-100 py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-violet-300"  {...rest} ref={ref} ></input>
        <span className="ml-2 text-xs italic text-rose-700 md:text-[11px] xs:text-[10px]">
            {errorMessage}
        </span>
    </div>
    )
}
)
export default InputField