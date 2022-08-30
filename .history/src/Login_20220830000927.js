import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="flex  bg-black">
      <div className="flex flex-col h-screen flex-grow-0">
        <img
          className="h-56 w-60"
          src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png"
          alt=""
        />
        <Button
          // className="login_btn"
          variant="contained"
          color="primary"
          onClick={signIn}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
