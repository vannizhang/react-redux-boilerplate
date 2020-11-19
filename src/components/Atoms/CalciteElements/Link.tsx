import React from 'react'
import { CalciteColor } from './typing';

type Props = {
    href?: string;
    text?: string;
    color?: CalciteColor;
}

const Link:React.FC<Props> = ({
    href,
    text,
    color,
    children
}) => {

    return (
        <a
            className={color ? `link-${color}` : ''}
            href={href || 'javascript:void(0);'}
            target='_blank'
        >
            { text || children }
        </a>
    )
}

export default Link;
