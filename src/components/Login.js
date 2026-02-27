import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
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
      <form className="rounded-lg bg-opacity-80 absolute p-12 text-white bg-black w-3/12 m-36 mx-auto right-0 left-0">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign up"}{" "}
        </h1>
         {!isSignInForm && (<input
          type="text"
          placeholder="Full Name"
          className="p-3 my-4 w-full bg-gray-600"
        ></input>)}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-600"
        ></input>
       
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-600"
        ></input>
        <button className="p-3 cursor-pointer my-4 bg-red-700 w-full">
          {isSignInForm?"Sign In":"Sign Up"}
        </button>
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
