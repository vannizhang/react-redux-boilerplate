import React from 'react';

type Props = {
    horizontal?: boolean;
    vertical?: boolean;
    children?: React.ReactNode;
};

const CenterAlign: React.FC<Props> = ({
    horizontal = true,
    vertical = true,
    children,
}: Props) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: horizontal ? 'center' : 'flex-start',
                alignItems: vertical ? 'center' : 'flex-start',
                width: '100%',
                height: '100%',
            }}
        >
            {children}
        </div>
    );
};

export default CenterAlign;
