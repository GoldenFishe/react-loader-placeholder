import React from 'react';
import styled, {keyframes} from 'styled-components';

const loaderItem = keyframes`
    0% {
        background-position: 0% 50%
    }
    50% {
        background-position: 100% 50%
    }
    100% {
        background-position: 0% 50%
    }`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    
    [data-react-loader-placeholder="true"] {
        position: relative;
    }

    [data-react-loader-placeholder="true"]::after {
        content: '';
        background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
	    background-size: 400% 400%;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 4px;
        animation: ${loaderItem} 5s ease infinite;
    }
`

const ReactLoaderPlaceholder= ({loading, children}) => (
    <React.Fragment>
        {loading ? <Wrapper>{children}</Wrapper> : children}
    </React.Fragment>
);

export default ReactLoaderPlaceholder;