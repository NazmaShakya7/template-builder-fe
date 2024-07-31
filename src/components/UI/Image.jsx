export default function Image({image,className,isSelected='false'}) {
    return(
        <img src={template.image} className={`h-[375px] border-collapse rounded-2xl ${isSelected?'border-4  border-primary':'border-2 border-primaryBorder'} `} alt="" />
    )
}