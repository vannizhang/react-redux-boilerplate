import styled from 'styled-components';

type Props = {
    horizontal?: boolean;
    vertical?: boolean;
};

const CenterAlign = styled.div<Props>`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: ${(props) => (props.horizontal ? 'center' : 'flex-start')};
    align-items: ${(props) => (props.vertical ? 'center' : 'flex-start')};
`;

CenterAlign.defaultProps = {
    horizontal: true,
    vertical: true,
};

export default CenterAlign;
