import styled from 'styled-components';

const DesktopMinWidth = 992;
const MobileMaxWidth = 767;
const TabletMaxWith = DesktopMinWidth - 1;
const TabletMinWidth = MobileMaxWidth + 1;

export const DesktopOnly = styled.div`
    display: none;
    @media (min-width: ${DesktopMinWidth}px) {
        display: block;
    }
`;

export const TabletOnly = styled.div`
    display: none;
    @media (max-width: ${TabletMaxWith}px) and (min-width: ${TabletMinWidth}px) {
        display: block;
    }
`;

export const MobileOnly = styled.div`
    display: none;
    @media (max-width: ${MobileMaxWidth}px) {
        display: block;
    }
`;
