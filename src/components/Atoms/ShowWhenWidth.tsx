import React, {
    useState,
    useEffect
} from 'react';

import useWindowSize from '../../hooks/useWindowSize';

const ShowWhenWidth:React.FC<{
    lessThan?: number;
    greaterThan?: number;
}> = ({
    lessThan=Number.POSITIVE_INFINITY,
    greaterThan=0,
    children
}) => {

    const windowSize = useWindowSize();

    const [ shouldShow, setShouldShow ] = useState<boolean>(true);

    useEffect(() => {

        let newVal = windowSize.innerWidth >= greaterThan && windowSize.innerWidth <= lessThan;

        setShouldShow(newVal);

    }, [ windowSize ]);

    return shouldShow ? (
        <>
            { children }
        </>
    ) : null;
}

export default ShowWhenWidth
