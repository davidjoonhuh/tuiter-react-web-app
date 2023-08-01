import React from "react";
import { BiComment, BiRepost } from "react-icons/bi"
import { LuShare } from "react-icons/lu"
import TuitLiked from "./tuit-liked";


const TuitStats = (
    {
        tuit = {
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "liked": false
        }
    }
) => {
    return (
        <div className="row">
            <div className="col-3">
                <BiComment /> {tuit.replies}
            </div>
            <div className="col-3">
                <BiRepost /> {tuit.retuits}
            </div>
            <div className="col-3">
                <TuitLiked tuit={tuit} />
            </div>
            <div className="col-3"> <span> <LuShare/> </span> </div>
        </div>
    );
};
export default TuitStats;