import styles from './Button.module.css';
import cn from 'classnames';
import Arrow from './arrow.svg';
import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}

export const Button = ({children, arrow='none', appearance, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost',
        })}
                {...props}
        >{children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down',
            })}>
                <Arrow/>
            </span> }
        </button>
    );
};