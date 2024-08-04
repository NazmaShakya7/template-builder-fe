import * as ScrollArea from '@radix-ui/react-scroll-area';
import { useRef } from "react";
export default function Scroll({children,className,height='h-screen'}) {
    const divRef = useRef(null);
    return (
        <ScrollArea.Root  className = "overflow-y-hidden" type="hover"
            scrollHideDelay={300}>
            <ScrollArea.Viewport className={`${height} ${className}`} ref={divRef} >
                {children}
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
                orientation="vertical"
                className="z-20 touch-none select-none"
            >
                <ScrollArea.Thumb
                    className="hover:bg-primaryLight rounded-full bg-primary"
                    style={{ width:'6px'}}
                />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
        </ScrollArea.Root>
    )
}