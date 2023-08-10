import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { IoLogoTwitter } from "react-icons/io";
import { AiFillBell, AiFillHome, AiOutlineUnorderedList, AiFillProfile } from "react-icons/ai";
import { RiHashtag } from "react-icons/ri";
import { BsEnvelopeFill, BsFillBookmarkFill } from "react-icons/bs";
import { FaEllipsisH, FaFileSignature } from "react-icons/fa"
import { BiSolidLogIn } from "react-icons/bi"



const NavigationSidebar = ({ iconstatus = true }) => {
    const { currentUser } = useSelector((state) => state.user);
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "more"];
    const icons = [
        <AiFillHome />,
        <RiHashtag />,
        <AiFillBell />,
        <BsEnvelopeFill />,
        <BsFillBookmarkFill />,
        <AiOutlineUnorderedList />,
        <FaEllipsisH />
    ]
    if (iconstatus) {
        //console.log(currentUser)
        return (
            <div className="list-group">
                <li className="list-group-item list-group-item-action"> <IoLogoTwitter /> </li>
                {links.map((link, index) =>
                    <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                        {icons[index]}
                        {" " + link}
                    </Link>
                )}

                {!currentUser && <Link className="list-group-item text-capitalize" to="/tuiter/login"> <BiSolidLogIn /> Login   </Link>}
                {!currentUser && <Link className="list-group-item text-capitalize" to="/tuiter/register"> <FaFileSignature /> Register</Link>}
                {currentUser && <Link className="list-group-item text-capitalize" to="/tuiter/profile"> <AiFillProfile /> Profile </Link>}
            </div>
        );
    } else {
        return (
            <div className="list-group">
                <li className="list-group-item list-group-item-action"> <IoLogoTwitter /> </li>
                {links.map((link, index) =>
                    <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                        {icons[index]}
                    </Link>
                )}
                {!currentUser && <Link className="list-group-item text-capitalize" to="/tuiter/login"> <BiSolidLogIn /> </Link>}
                {!currentUser && <Link className="list-group-item text-capitalize" to="/tuiter/register"> <FaFileSignature /> </Link>}
                {currentUser && <Link className="list-group-item text-capitalize" to="/tuiter/profile"> <AiFillProfile /> </Link>}
            </div>
        );
    }
};
export default NavigationSidebar;