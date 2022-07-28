import {RatingProps} from "./Rating.Props";
import cn from 'classnames';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import {useEffect, useState} from "react";

export const Rating = ({rating, isEditable = false, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((el: JSX.Element, index: number) => {
            return (
                <StarIcon
                    className={cn(styles.star, {
                        [styles.filled]: index < currentRating,
                    })}
                />
            );
        });
        setRatingArray(updateArray);
    };
    return (
        <div {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};