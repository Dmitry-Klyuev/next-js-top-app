import style from './Tag.module.css';
import {TagProps} from "./Tag.props";
import cn from 'classnames';


export const Tag = ({children, size = 's', href, color, className, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(style.tag, className, {
            [style.s]: size === 's',
            [style.m]: size === 'm',
            [style.ghost]: color === 'ghost',
            [style.red]: color === 'red',
            [style.grey]: color === 'grey',
            [style.green]: color === 'green',
            [style.primary]: color === 'primary',
        })}
             {...props}
        >
            {href
                ? <a>{children}</a>
                : <>{children}</>
            }
        </div>
    );
};