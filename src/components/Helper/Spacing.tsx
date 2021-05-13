import styled from 'styled-components';

type Props = {
    padding?: number | string;
    margin?: number | string;
    paddingTop?: number | string;
    paddingBottom?: number | string;
    paddingLeft?: number | string;
    paddingRight?: number | string;
    marginTop?: number | string;
    marginBottom?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
};

const Spacing = styled.div<Props>`
    padding: ${(props) => `
        ${props.padding || props.paddingTop} 
        ${props.padding || props.paddingRight} 
        ${props.padding || props.paddingBottom} 
        ${props.padding || props.paddingLeft}`};
    margin: ${(props) => `
        ${props.margin || props.marginTop} 
        ${props.margin || props.marginRight} 
        ${props.margin || props.marginBottom} 
        ${props.margin || props.marginLeft}`};
`;

Spacing.defaultProps = {
    padding: 0,
    margin: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
};

export default Spacing;
