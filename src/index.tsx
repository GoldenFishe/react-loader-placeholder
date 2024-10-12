import {CSSProperties, Fragment, ReactNode, useLayoutEffect, useRef} from 'react';

import styles from './styles.css'

export interface ReactLoaderPlaceholderProps {
    loading: boolean,
    children: ReactNode;
    color?: string,
    disableAnimation?: boolean,
    className?: string,
    style?: CSSProperties,
}

/**
 * ReactLoaderPlaceholder Component
 * @param {Object} props
 * @param {boolean} props.loading - Set visible placeholder.
 * @param {ReactNode} props.children - Elements to show when loading is false.
 * @param {string} [props.color] - background color of placeholder.
 * @param {boolean} [props.disableAnimation] - Disable placeholder's animation.
 * @param {string} [props.className] - className.
 * @param {CSSProperties} [props.style] - style Object.
 */
const ReactLoaderPlaceholder = ({
                                    loading,
                                    color,
                                    disableAnimation,
                                    className,
                                    style,
                                    children
                                }: ReactLoaderPlaceholderProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (containerRef.current && color) {
            containerRef.current.style.setProperty("--background", color);
        }
    }, [color]);

    const classNames = [styles.container, className, styles.withoutAnimation]
        .filter(className => disableAnimation ? true : className !== styles.withoutAnimation)
        .join(" ");

    return (
        <Fragment>
            {loading ?
                <div className={classNames} style={style} ref={containerRef}>{children}</div> :
                children}
        </Fragment>
    )
}

export default ReactLoaderPlaceholder;
