import {ReactNode} from "react";

interface BadgeProps {
    children: ReactNode;
    backgroundColor?: string;
    color?: string;
}

const Badge = ({children, color, backgroundColor}: BadgeProps) => {
    const style = {
        color: color ?? 'white',
        backgroundColor: backgroundColor ?? 'black'
    }

    return (
        <div className={'badge'} style={style}>
            {children}
        </div>
    )
}

export default Badge;