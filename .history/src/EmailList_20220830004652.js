import React from "react";
import "./EmailList.css";
import Section from "./Section";
import { IconButton, Checkbox } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

import RedoIcon from "@material-ui/icons/Redo";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import InboxIcon from "@material-ui/icons/Inbox";
import SettingsIcon from "@material-ui/icons/Settings";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EmailRow from "./EmailRow";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList_sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected={true} />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="emailList_list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="How is this looking??"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="what are you'r Hobbies??"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="How is this looking??"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="How is this looking??"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="How is this looking??"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="How is this looking??"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="........"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="........"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="........"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="........"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="........"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="........"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="........"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="........"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="........"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="........"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="........"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="........"
          time=" 2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="........"
          time="2:08 AM"
        />
        <EmailRow
          title="Gmail-clone"
          subject="Hey jasmine how r u?"
          description="how is this looking???"
          time=" 2:08 AM"
        />
      </div>
    </div>
  );
}

export default EmailList;
