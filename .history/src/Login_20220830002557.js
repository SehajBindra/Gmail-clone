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
      <img
        className="w-80"
        src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png"
        alt=""
      />

      <p className="font-xs text-white my-8  ">
        This is not a real App It is Build for Educational Purposes and all
        rights are reserved to Google@2022.
      </p>

      <Button
        className="login_btn"
        variant="contained"
        color="#4285F4"
        onClick={signIn}
      >
        Sign In With Google
      </Button>
    </div>
  );
}

export default Login;
