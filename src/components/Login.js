import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }

  function handleButtonClick() {
    const message = checkValidData(email.current.value, password.current.value);
    setMessage(message);
    console.log("email", email.current.value, password.current.value);
    console.log("message", message);
    if (message) return;

    if (!isSignInForm) {
      //SignUP

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        // name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/89522439?s=96&v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  }),
                ),
              );
              navigate("/browse");
            })
            .catch((error) => {
              setMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      //SignIn

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " " + errorMessage);
          navigate("/");
        });
    }
  }
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_large.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-lg bg-opacity-80 absolute p-12 text-white bg-black w-3/12 m-36 mx-auto right-0 left-0"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign up"}{" "}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-600"
          ></input>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-600"
        ></input>

        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-600"
        ></input>
        <button
          className="p-2 cursor-pointer my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500 font-bold text-lg p-2">{message}</p>
        <p onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
