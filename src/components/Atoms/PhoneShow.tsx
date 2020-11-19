import React from 'react';
import { miscFns } from 'helper-toolkit-ts';

type Props = {
    children?: React.ReactNode;
};

const isMoble = miscFns.isMobileDevice();

const PhoneShow: React.FC<Props> = ({ children }: Props) => {
    return isMoble ? <div className="phone-show">{children}</div> : null;
};

export default PhoneShow;
