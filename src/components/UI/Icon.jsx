
export default function Icon({icon,className}) {
    return(
        <button className={` bg-primaryBorder  w-6 h-6 rounded-md flex justify-center items-center p-1 ${className}`}>
            {icon}
        </button>
    )
}