import React from 'react'

const CenterAlign:React.FC<{
    horizontal?: boolean;
    vertical?: boolean
}> = ({
    horizontal=true,
    vertical=true,
    children
}) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: horizontal ? 'center' : 'flex-start',
                alignItems: vertical ? 'center' : 'flex-start',
                width: '100%',
                height: '100%'
            }}
        >
            { children }
        </div>
    )
}

export default CenterAlign
