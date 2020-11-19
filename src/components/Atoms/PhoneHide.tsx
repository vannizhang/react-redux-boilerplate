import React from 'react';

import {
    miscFns
} from 'helper-toolkit-ts';

const isMoble = miscFns.isMobileDevice();

const PhoneHide:React.FC<{}> = ({
    children
}) => {
    return !isMoble ? (
        <div
            className='phone-hide'
        >
            { children }
        </div>
    ) : null;
}

export default PhoneHide;
