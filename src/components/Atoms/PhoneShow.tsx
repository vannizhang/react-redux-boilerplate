import React from 'react'
import {
    miscFns
} from 'helper-toolkit-ts';

const isMoble = miscFns.isMobileDevice();

const PhoneShow:React.FC<{}> = ({
    children
}) => {
    return isMoble ? (
        <div
            className='phone-show'
        >
            { children }
        </div>
    ) : null;
}

export default PhoneShow;
