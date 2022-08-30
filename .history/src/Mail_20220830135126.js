import React from "react";
import "./Mail.css";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/mailSlice";

function Mail() {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);
  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mailtools_left">
          <IconButton onClick={() => history.push("/emailList")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="mailtools_right">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>

      <div className="mail_body">
        <div className="mail_bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantOutlinedIcon className="mail_important" />
          <p>{selectedMail?.title}</p>
          <p className="mail_time my-2">{selectedMail?.time}</p>
        </div>
        <div className="mail_message">
          <p> {selectedMail?.description} </p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
