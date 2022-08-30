import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { IconButton, Checkbox } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import StarIcon from "@material-ui/icons/Star";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";
import { useState } from "react";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [star, setStar] = useState();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );

    history.push("/mail");
  };
  return (
    <div className="emailRow">
      <div className="emailRow_options">
        <div className="hidden sm:inline-flex sm:items-center">
          <Checkbox />
          <IconButton onClick={() => (star ? setStar(false) : setStar(true))}>
            {star ? (
              <StarIcon htmlColor="#FFD700" />
            ) : (
              <StarBorderOutlinedIcon />
            )}
          </IconButton>
          <IconButton>
            <LabelImportantOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <h3 onClick={openMail} className="emailRow_title">
        {" "}
        <p className="text-sm"> {title}</p>
      </h3>

      <div onClick={openMail} className="emailRow_message ">
        <h4 className="text-sm sm:text-base">
          {subject}
          {""}
          <span className="emailRow_description text-sm sm:text-base  mx-2">
            {description}
          </span>
        </h4>
      </div>

      <p onClick={openMail} className="emailRow_time">
        {" "}
        <div className="hidden md:inline text-xs">{time}</div>
      </p>
    </div>
  );
}

export default EmailRow;
