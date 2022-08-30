import React from "react";
import "./Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";

import { IconButton, Avatar } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header ">
      <div className="header_left">
        <div className="hidden">
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>

        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt=""
        />
      </div>

      <div className="header_middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header_inputcarset" />
      </div>

      <div className="header_right hidden sm:inline">
        <IconButton>
          <AppsIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton>
          <Avatar onClick={signOut} src={user?.photoUrl} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
