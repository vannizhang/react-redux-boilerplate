import React from 'react';
import { useMediaQuery } from 'react-responsive';

type Props = {
    children: React.ReactNode
}

export const DesktopOnly:React.FC<Props> = ({ children }:Props) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return (
        <> { isDesktop ? children : null } </>
    )
}

export const TabletOnly:React.FC<Props>  = ({ children }:Props) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return (
        <> { isTablet ? children : null } </>
    )
}

export const MobileOnly:React.FC<Props>  = ({ children }:Props) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return (
        <> { isMobile ? children : null } </>
    )
}
