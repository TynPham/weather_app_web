import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { setUserData } from "../../reduxToolkit/dataUserSlice";
import { Link, useNavigate } from "react-router-dom";
import GgAndFb from "./GgAndFb";
import Field from "./Field";
import { Spinner } from "../../icon/index";

const schemaLogIn = yup.object().shape({
  email: yup.string().required("Email is a required field!").email("Email is not valid!"),
  password: yup.string().required("Password is a required field!").min(8, "Password must be at least 8 characters!"),
});

const schemaSignUp = yup.object().shape({
  email: yup.string().required("Email is a required field!").email("Email is not valid!"),
  password: yup.string().required("Password is a required field!").min(8, "Password must be at least 8 characters!"),
  confirmPassword: yup
    .string()
    .required("confirmPassword is a required field!")
    .oneOf([yup.ref("password")], "Password must be match!"),
});

const LogIn = () => {
  const [schema, setSchema] = useState(schemaLogIn);
  const [isLogInForm, setIsLogInForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPass, setConfirmPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (data) => {
    if (isLogInForm) {
      handleLogIn(data);
    } else {
      handleSignUp(data);
    }
  };

  // const resetValue = () => {
  //   setEmail("");
  //   setPassword("");
  //   setConfirmPass("");
  // };

  const handleSetLogInOrSignUp = () => {
    if (isLogInForm) {
      setSchema(schemaSignUp);
      // resetValue();
    } else {
      setSchema(schemaLogIn);
      // resetValue();
    }
    setIsLogInForm(!isLogInForm);
  };

  const handleLogIn = async (data) => {
    try {
      setIsLoading(true);
      const result = await signInWithEmailAndPassword(auth, data.email, data.password);
      if (result.user.emailVerified) {
        dispatch(setUserData(result.user.providerData[0]));
        localStorage.setItem("user", JSON.stringify(result.user.providerData[0]));
        navigate("/");
      } else {
        toast.info("Please verify the email in your email!");
      }
    } catch (error) {
      toast.error("Your email or password is wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (data) => {
    try {
      setIsLoading(true);
      const result = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await sendEmailVerification(result.user);
      toast.info("Please verify the email in your email!");
      setIsLogInForm(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-body h-screen w-full px-3">
      <div className="md:p-8 px-4 py-8 mt-8 max-w-430 w-full rounded-md bg-white">
        <div className="form-content">
          <header className="text-3xl text-login text-center font-semibold">{isLogInForm ? "Login" : "Signup"}</header>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Field
              name="email"
              setValue={setValue}
              type="email"
              placeholder="Email"
              register={{ ...register("email") }}
              errorMessage={errors.email?.message}
            />
            <Field
              name="password"
              setValue={setValue}
              type="password"
              placeholder="Password"
              register={{ ...register("password") }}
              errorMessage={errors.password?.message}
            />
            {!isLogInForm && (
              <Field
                name="confirmPassword"
                setValue={setValue}
                type="password"
                placeholder="Confirm password"
                register={{ ...register("confirmPassword") }}
                errorMessage={errors.confirmPassword?.message}
              />
            )}
            {isLogInForm && (
              <div className="text-center mt-2">
                <Link to="/forgot" className="text-sm text-login_blue font-normal">
                  Forgot password?
                </Link>
              </div>
            )}
            <div className="relative h-12 w-full mt-5 rounded-md">
              <button className="w-full h-full text-white bg-login hover:bg-loginHover cursor-pointer text-base font-normal border-none rounded-md transition">
                {isLogInForm ? "Login" : "Signup"}
                <div className="absolute top-1/2 right-0 -translate-y-1/2">{isLoading && <Spinner />}</div>
              </button>
            </div>
          </form>

          <div className="text-sm text-login text-center font-normal mt-2">
            <span>
              {isLogInForm ? "Don't have an account? " : "Already have an account? "}
              <span onClick={handleSetLogInOrSignUp} className="text-blue-500 cursor-pointer hover:underline">
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
