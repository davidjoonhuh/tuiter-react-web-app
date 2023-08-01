import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoLogoTwitter } from "react-icons/io";
import { AiFillBell, AiFillHome, AiOutlineUnorderedList } from "react-icons/ai";
import { RiHashtag } from "react-icons/ri";
import { BsEnvelopeFill, BsFillBookmarkFill, BsFillPersonFill } from "react-icons/bs";
import { FaEllipsisH } from "react-icons/fa"



const NavigationSidebar = ({iconstatus = true}) => {
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];
    const icons = [
        <AiFillHome />,
        <RiHashtag />,
        <AiFillBell />,
        <BsEnvelopeFill />,
        <BsFillBookmarkFill />,
        <AiOutlineUnorderedList />,
        <BsFillPersonFill />,
        <FaEllipsisH />
    ]
    if (iconstatus) {
        return (
            <div className="list-group">
                <li class="list-group-item list-group-item-action"> <IoLogoTwitter /> </li>
                {links.map((link, index) =>
                    <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                        {icons[index]}
                        {" " + link}
                    </Link>
                )}
            </div>
        );
    } else {
        return (
            <div className="list-group">
                <li class="list-group-item list-group-item-action"> <IoLogoTwitter /> </li>
                {links.map((link, index) =>
                    <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                        {icons[index]}
                    </Link>
                )}
            </div>
        );
    }
};
export default NavigationSidebar;