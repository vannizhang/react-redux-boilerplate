import React from 'react';
import { CalciteColor } from './typing';

type Props = {
    href?: string;
    text?: string;
    color?: CalciteColor;
    children?: React.ReactNode;
};

const Link: React.FC<Props> = ({ href, text, color, children }: Props) => {
    return (
        <a
            className={color ? `link-${color}` : ''}
            href={href || 'javascript:void(0);'}
            target="_blank"
            rel="noreferrer"
        >
            {text || children}
        </a>
    );
};

export default Link;
