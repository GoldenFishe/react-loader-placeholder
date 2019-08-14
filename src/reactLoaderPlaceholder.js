import React from 'react';
import styled, {keyframes, css} from 'styled-components';

const loaderItemAnimation = keyframes`
    0% {
        background-position: 0% 50%
    }
    50% {
        background-position: 100% 50%
    }
    100% {
        background-position: 0% 50%
     }
`;

const animation = props => props.disableAnimation ? css`unset` : css`${loaderItemAnimation} 5s ease infinite`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    flex: 1 0 auto;
    
    [data-react-loader-placeholder="true"] {
        position: relative;
        top: 0;
        left: 0;
    }

    [data-react-loader-placeholder="true"]::after {
        content: '';
        background: ${props => props.background ?
            props.background :
            'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)'};
	    background-size: 400% 400%;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 4px;
        animation: ${animation};
        z-index: 99999;
    }
`;

/**
 * The component's props.
 * @typedef {Object} Props
 * @property {boolean} loading - Enable placeholder.
 * @property {string} color - background color of placeholder.
 * @property {boolean} disableAnimation - Disable placeholder's animation.
 * @property {string} className -className.
 * @property {Object} style - style Object.
 */

/**
 * ReactLoaderPlaceholder Component
 * @param {Props}
 */
const ReactLoaderPlaceholder = ({loading, color, disableAnimation, className, style, children}) => (
    <React.Fragment>
        {loading ?
            <Wrapper background={color}
                     className={className}
                     style={style}
                     disableAnimation={disableAnimation}>
                {children}
            </Wrapper> :
            children}
    </React.Fragment>
);

export default ReactLoaderPlaceholder;
