import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTweetsRequest } from "../../state/tweets";
import "./Sidebar.css";
import { Link } from 'react-router-dom';
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "../SidebarOption/SidebarOption";
import { BookmarkBorder, Home, ListAlt, MailOutline, MoreHoriz, NotificationsNone, PermIdentity, Search } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const Sidebar = ({ setFeedTitle }) => {
  const dispatch = useDispatch();
  const location = useLocation()
  
  const getTweets = (e) => {
    // setFeedTitle("Home");
    dispatch(getTweetsRequest())
  }
  
  return (
    <div className="sidebar" >
      <Link to="/home" onClick={getTweets} className="sidebar__link" >
        <TwitterIcon className="sidebar__twitterIcon" />
        {
          location.pathname === '/home' ? <SidebarOption active Icon={Home} text="Home" /> : <SidebarOption Icon={Home} text="Home" />
        }
      </Link>
      <SidebarOption Icon={Search} text="Explorar" />
      <SidebarOption Icon={NotificationsNone} text="Notificaciones" />
      <SidebarOption Icon={MailOutline} text="Mensajes" />
      <SidebarOption Icon={BookmarkBorder} text="Guardados" />
      <SidebarOption Icon={ListAlt} text="Listas" />
      <SidebarOption Icon={PermIdentity} text="Perfil" />
      <SidebarOption Icon={MoreHoriz} text="Más opciones" />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;
