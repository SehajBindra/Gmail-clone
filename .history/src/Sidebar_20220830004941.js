import { Button } from "@material-ui/core";
import React from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Sidebaroption from "./Sidebaroption";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar hidden md:inline">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar_compose"
        onClick={() => dispatch(openSendMessage())}
      >
        {" "}
        Compose
      </Button>
      <img
        className="h-8"
        src="https://www.gstatic.com/images/icons/material/colored_icons/2x/create_32dp.png"
        alt=""
      />

      <Sidebaroption
        Icon={InboxIcon}
        title="Inbox"
        number={31}
        selected={true}
      />
      <Sidebaroption Icon={StarIcon} title="Started" number={18} />
      <Sidebaroption Icon={AccessTimeIcon} title="Snoozed" number={18} />
      <Sidebaroption Icon={LabelImportantIcon} title="Important" number={31} />
      <Sidebaroption Icon={NearMeIcon} title="Sent" number={18} />
      <Sidebaroption Icon={NoteIcon} title="Drafts" number={31} />

      <Sidebaroption Icon={ExpandMoreIcon} title="More" number={18} />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>

          <IconButton>
            <DuoIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
