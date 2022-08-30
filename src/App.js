import React from "react";
import Header from "./Header";
import "./App.css";
import EmailList from "./EmailList";
import Mail from "./Mail";
import Sidebar from "./Sidebar";
import SendMail from "./SendMail";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";
import { Helmet } from "react-helmet";

function App() {
  const dispatch = useDispatch();
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // the user is logged in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>

      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="app">
            <Header />

            <div className="app__body">
              <Sidebar />

              <Switch>
                <Route path="/mail">
                  <Mail />
                </Route>
                <Route path="/">
                  <EmailList />
                </Route>
              </Switch>
            </div>

            {sendMessageIsOpen && <SendMail />}
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
