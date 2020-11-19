import React from 'react'

type Props = {
    paddingTop?: number | string;
    paddingBottom?: number | string;
    paddingLeft?: number | string;
    paddingRight?: number | string;
    marginTop?: number | string;
    marginBottom?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
}

const Spacing:React.FC<Props> = ({
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    children
}) => {
    return (
        <div
            style={{
                paddingTop: paddingTop || 'unset',
                paddingBottom: paddingBottom || 'unset',
                paddingLeft: paddingLeft || 'unset',
                paddingRight: paddingRight || 'unset',
                marginTop: marginTop || 'unset',
                marginBottom: marginBottom || 'unset',
                marginLeft: marginLeft || 'unset',
                marginRight: marginRight || 'unset',
            }}
        >
            { children }
        </div>
    )
}

export default Spacing
