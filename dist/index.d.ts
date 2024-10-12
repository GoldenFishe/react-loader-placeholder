import { CSSProperties, ReactNode } from 'react';
export interface ReactLoaderPlaceholderProps {
    loading: boolean;
    children: ReactNode;
    color?: string;
    disableAnimation?: boolean;
    className?: string;
    style?: CSSProperties;
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
declare const ReactLoaderPlaceholder: ({ loading, color, disableAnimation, className, style, children }: ReactLoaderPlaceholderProps) => import("react/jsx-runtime").JSX.Element;
export default ReactLoaderPlaceholder;
