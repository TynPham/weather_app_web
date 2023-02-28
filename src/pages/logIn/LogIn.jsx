import React, { useState } from "react";
import { toast } from "react-toastify";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { setUserData } from "../../reduxToolkit/dataUserSlice";
import { useNavigate } from "react-router-dom";
import GgAndFb from "./GgAndFb";
import Field from "./Field";
import { Spinner } from "../../icon/index";

const LogIn = () => {
  const [isLogInForm, setIsLogInForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!isLogInForm) {
      if (!email || !password || !confirmPass) {
        toast.error("Some field is empty", {
          autoClose: 1000,
        });
      } else if (confirmPass !== password) {
        toast.error("Confirm Password Error", {
          autoClose: 1000,
        });
      } else {
        handleSignUp();
      }
    } else {
      if (!email || !password) {
        toast.error("Some field is empty", {
          autoClose: 1000,
        });
      } else {
        handleLogIn();
      }
    }
  };

  const handleLogIn = async () => {
    try {
      setIsLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (result.user.emailVerified) {
        dispatch(setUserData(result.user.providerData[0]));
        localStorage.setItem(
          "user",
          JSON.stringify(result.user.providerData[0])
        );
        navigate("/home");
      } else {
        toast.info("Please verify the email in your email!");
      }
    } catch (error) {
      toast.error("Your email or password is wrong!");
    }
    setIsLoading(false);
  };

  const handleSignUp = async () => {
    try {
      setIsLoading(true);
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(result.user);
      toast.info("Please verify the email in your email!");
      setIsLogInForm(true);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center bg-body h-screen w-full px-3">
      <div className="md:p-8 px-4 py-8 mt-8 max-w-430 w-full rounded-md bg-white">
        <div className="form-content">
          <header className="text-3xl text-login text-center font-semibold">
            {isLogInForm ? "Login" : "Signup"}
          </header>
          <form onSubmit={handleSubmitForm}>
            <Field
              name={email}
              setName={setEmail}
              type="email"
              placeholder="Email"
            />
            <Field
              name={password}
              setName={setPassword}
              type="password"
              placeholder="Password"
            />
            {!isLogInForm && (
              <Field
                name={confirmPass}
                setName={setConfirmPass}
                type="password"
                placeholder="Confirm password"
              />
            )}
            {isLogInForm && (
              <div className="text-center mt-2">
                <a href="#" className="text-sm text-login_blue font-normal">
                  Forgot password?
                </a>
              </div>
            )}
            <div className="relative h-12 w-full mt-5 rounded-md">
              <button className="w-full h-full text-white bg-login hover:bg-loginHover cursor-pointer text-base font-normal border-none rounded-md transition">
                {isLogInForm ? "Login" : "Signup"}
                <div className="absolute top-1/2 right-0 -translate-y-1/2">
                  {isLoading && <Spinner />}
                </div>
              </button>
            </div>
          </form>

          <div className="text-sm text-login text-center font-normal mt-2">
            <span>
              {isLogInForm
                ? "Don't have an account? "
                : "Already have an account? "}
              <span
                onClick={() => setIsLogInForm(!isLogInForm)}
                className="text-blue-500 cursor-pointer hover:underline"
              >
                {isLogInForm ? "Signup" : "Login"}
              </span>
            </span>
          </div>
        </div>
        <div className="line"></div>
        <GgAndFb />
      </div>
    </div>
  );
};

export default LogIn;
