import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import styles from './P.module.css'
import cn from "classnames";


interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode;
    size?: 's' | "m" | 'l';
}

export const P = ({children, size = 'm', className, ...props}: PProps): JSX.Element => {
    return (
        <p className={cn(styles.p, className, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.l]: size === 'l'
        })}
           {...props}
        >
            {children}
        </p>
    );
}