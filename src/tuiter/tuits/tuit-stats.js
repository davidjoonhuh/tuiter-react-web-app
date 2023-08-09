import React from "react";
import { BiComment, BiRepost } from "react-icons/bi"
import { LuShare } from "react-icons/lu"
import { AiFillHeart } from "react-icons/ai"
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";


const TuitStats = (
    {
        tuit = {
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "liked": false,
            "_id": 234,
        }
    }
) => {
    const dispatch = useDispatch();
    return (
        <div className="row">
            <div className="col-2">
                <BiComment /> {tuit.replies}
            </div>
            <div className="col-2">
                <BiRepost /> {tuit.retuits}
            </div>
            <div className="col-2">
                <AiFillHeart
                    className="text-danger"
                    onClick={() =>
                        dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
                    }
                />
                <span className="ms-2">{tuit.likes}</span>
            </div>
            <div className="col-2">
                <BsFillHandThumbsDownFill
                    onClick={() =>
                        dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))
                    }
                />
                <span className="ms-2">{tuit.dislikes}</span>
            </div>
            <div className="col-2"> <span> <LuShare /> </span> </div>
        </div>
    );
};
export default TuitStats;