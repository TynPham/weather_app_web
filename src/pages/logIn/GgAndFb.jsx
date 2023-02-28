import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../reduxToolkit/dataUserSlice";
import { useDispatch } from "react-redux";

const GgAndFb = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogInGg = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(setUserData(result.user.providerData[0]));
      localStorage.setItem("user", JSON.stringify(result.user.providerData[0]));
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogInFb = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(setUserData(result.user.providerData[0]));
      localStorage.setItem("user", JSON.stringify(result.user.providerData[0]));
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <span
        onClick={handleLogInFb}
        className="relative flex justify-center items-center h-12 w-full mt-5 text-white bg-fb rounded-md cursor-pointer"
      >
        <BsFacebook className="absolute top-1/2 -translate-y-1/2 left-4 text-2xl" />
        <span>Login with Facebook</span>
      </span>
      <span
        className="relative flex justify-center items-center h-12 w-full mt-3 border border-input rounded-md cursor-pointer"
        onClick={handleLogInGg}
      >
        <img
          src="/assets/image/gg.png"
          alt="gg"
          className="absolute top-1/2 -translate-y-1/2 left-4 w-5"
        />
        <span className="font-medium text-login opacity-60">
          Login with Google
        </span>
      </span>
    </div>
  );
};

export default GgAndFb;
