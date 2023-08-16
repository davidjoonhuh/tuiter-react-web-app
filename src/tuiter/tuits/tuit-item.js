import { deleteTuitThunk } from "../services/tuits-thunks";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdVerified } from "react-icons/md"
import TuitStats from "./tuit-stats";
import { AiOutlineClose } from "react-icons/ai"

const TuitItem = (
  {
    tuit = {
      "_id": 234,
      "topic": "Space",
      "userName": "SpaceX",
      "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
      "time": "2h",
      "image": "spacex.jpg",
      "liked": true,
      "replies": 123,
      "retuits": 432,
      "likes": 2345,
      "handle": "@spacex",
      "tuit": "Optimistic title."
    }
  }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  const { currentUser } = useSelector((state) => state.user);
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
          <img className="rounded-circle" height={48} src={`./images/${tuit.image}`} />
        </div>
        <div className="col-10">
          <div>
            <AiOutlineClose className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}> </AiOutlineClose>
            <span className="fw-bolder"> {tuit.username}  </span>
            <MdVerified /> {tuit.handle} · {tuit.time}
          </div>
          <div> {tuit.tuit} </div>
          <div> <TuitStats tuit={tuit} /> </div>
        </div>
      </div>
    </li>
  );
};
export default TuitItem;

