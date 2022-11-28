import cn from 'classnames';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import {useEffect, useState, DetailedHTMLProps, HTMLAttributes} from "react";

interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}

export const Rating = ({rating, isEditable = false, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructorRating(rating);
    }, [rating]);

    const onkeydown = (e: KeyboardEvent, i: number) => {
        if (setRating) {
            e.code === 'Space' && setRating(i);
        }
    };

    const setRatingProps = (i: number) => {
        setRating && setRating(i);
    };

    const changeDisplay = (i: number) => {
        isEditable && constructorRating(i);
    };

    const constructorRating = (RatingFromProps: number) => {
        const newRating = ratingArray.map((el: JSX.Element, i: number) => {
            return (<span className={cn(styles.star, {
                    [styles.filled]: i < RatingFromProps,
                    [styles.editable]: isEditable,
                })}
                          onMouseEnter={() => changeDisplay(i + 1)}
                          onClick={() => isEditable && setRating && setRatingProps(i + 1)}
                          onMouseLeave={() => changeDisplay(rating)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent) => isEditable && setRating && onkeydown(e, i + 1)
                        }
                    />
                </span>
            );
        });
        setRatingArray(newRating);
    };

    return (
        <div {...props}>
            {ratingArray.map((el, i) => (<span key={i}>{el}</span>))}
        </div>
    );
};