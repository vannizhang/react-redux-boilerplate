import React, { useState, useEffect } from 'react';

import useWindowSize from '../../hooks/useWindowSize';

type Props = {
    lessThan?: number;
    greaterThan?: number;
    children?: React.ReactNode;
};

const ShowWhenWidth: React.FC<Props> = ({
    lessThan = Number.POSITIVE_INFINITY,
    greaterThan = 0,
    children,
}: Props) => {
    const windowSize = useWindowSize();

    const [shouldShow, setShouldShow] = useState<boolean>(true);

    useEffect(() => {
        const newVal =
            windowSize.innerWidth >= greaterThan &&
            windowSize.innerWidth <= lessThan;

        setShouldShow(newVal);
    }, [windowSize]);

    return shouldShow ? <>{children}</> : null;
};

export default ShowWhenWidth;
