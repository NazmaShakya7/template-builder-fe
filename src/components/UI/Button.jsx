
export default function Button({children,variant='primary',color='primary',className='w-52',...rest}) {
    let classes;
    if (variant === 'primary'){
        classes = 'bg-primary mx-auto text-white py-[5px] px-2 rounded-xl hover:bg-primary hover:opacity-80 '
    }
    else if(variant === 'bordered'){
        classes = ' py-1 rounded-xl '
    }
    return(
        <button {...rest} className={`${classes} ${className} transition delay-75 ease-in-out`}>
            {children}
        </button>
    )
}