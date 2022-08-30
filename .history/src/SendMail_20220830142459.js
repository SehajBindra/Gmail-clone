import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { db } from "./firebase";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import firebase from "firebase";
import { closeSendMessage } from "./features/mailSlice";
function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (formdata) => {
    console.log(formdata);
    db.collection("emails").add({
      to: formdata.to,
      subject: formdata.subject,
      message: formdata.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };
  return (
    <div className="sendMail w-50">
      <div className="sendMail_header">
        <h3>New Message </h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail_close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail_error">To is Required!!</p>}

        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail_error">Subject is Required!!</p>
        )}
        <input
          name="message"
          placeholder="Message....."
          type="text"
          className="sendMail_Message"
          {...register("message", { required: true })}
        />

        {errors.message && (
          <p className="sendMail_error">Message is Required!!</p>
        )}

        <div className="sendMail_options">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="sendMail_send"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
