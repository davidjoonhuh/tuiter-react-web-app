import React from "react";
import { AiFillHeart } from "react-icons/ai"


const TuitLiked = (
    {
        tuit = {
            "likes": 2345,
            "liked": true,
        }
    }
) => {
    if (tuit.liked === false) {
        return (
            <>
                <AiFillHeart /> {tuit.likes}
            </>
        );
    } else {
        return (
            <>
                <AiFillHeart className="text-danger" /> {tuit.likes}
            </>
        );
    }
};
export default TuitLiked;