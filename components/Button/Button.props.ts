import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";
//типизация кнопки (extends.... для onClick и остальных методов)

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}