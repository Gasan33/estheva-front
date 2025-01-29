import React, { useState } from "react";
import { StarIcon } from "lucide-react";

const RatingBar = ({ readOnly, valueOfRating }: { readOnly: boolean, valueOfRating: number }) => {
    const [rating, setRating] = useState<number>(0);
    const [hover, setHover] = useState<number>(0);

    return (
        <div className="flex gap-2 py-4">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    readOnly ?
                        <StarIcon
                            key={i}
                            className="star"
                            size={24}
                            color={ratingValue <= valueOfRating ? "#FFD700" : "#e4e5e9"}
                        // onMouseEnter={() => setHover(ratingValue)}
                        // onMouseLeave={() => setHover(null)}
                        />
                        : <label key={i}>
                            <input
                                className="hidden"
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                            />
                            <StarIcon
                                key={i}
                                className="star"
                                size={24}
                                color={ratingValue <= (hover || rating) ? "#2B2073" : "#e4e5e9"}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(0)}
                            />
                        </label>
                );
            })}
            {/* <p>Rating is: {rating}</p> */}
        </div>
    );
};

export default RatingBar;
