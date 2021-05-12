import React from 'react';

import { miscFns } from 'helper-toolkit-ts';

type Props = {
    children?: React.ReactNode;
};

const isMoble = miscFns.isMobileDevice();

const PhoneHide: React.FC<Props> = ({ children }: Props) => {
    return !isMoble ? <div className="phone-hide">{children}</div> : null;
};

export default PhoneHide;
