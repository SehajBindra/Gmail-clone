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
    <div className="flex flex-col justify-center items-center px-14 min-h-screen bg-black">
      <div className="flex items-center">
        <img
          className=" w-80"
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
