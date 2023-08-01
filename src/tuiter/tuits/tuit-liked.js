import React from "react";
import { useDispatch } from "react-redux";
import { toggleLike } from "../reducers/tuits-reducer";
import { AiFillHeart } from "react-icons/ai"


const TuitLiked = (
    {
        tuit = {
            "likes": 2345,
            "liked": true,
            "_id": 234,
        }
    }
) => {
    const dispatch = useDispatch();
    const likeClickHandler = (id) => {
        dispatch(toggleLike(id));
      };

    if (tuit.liked === false) {
        return (
            <>
                <AiFillHeart onClick={() => likeClickHandler(tuit._id)}/> {tuit.likes}
            </>
        );
    } else {
        return (
            <>
                <AiFillHeart className="text-danger" onClick={() => likeClickHandler(tuit._id)}/> {tuit.likes}
            </>
        );
    }
};
export default TuitLiked;