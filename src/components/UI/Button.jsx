
export default function Button({children,variant='primary',color='primary',className='w-[200px]',...rest}) {
    let classes;
    if (variant === 'primary'){
        classes = 'bg-primary mx-auto text-white py-[5px] px-2 rounded-xl '
    }
    else if(variant === 'bordered'){
        classes = 'bg-white py-1 rounded-xl '
    }
    return(
        
        <button {...rest} className={`${classes} ${className}`}>
            {children}
        </button>
    )
}