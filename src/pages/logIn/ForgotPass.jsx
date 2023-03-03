import React, { useState } from "react";
import Field from "./Field";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Spinner } from "../../icon";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePasswordRecover = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await sendPasswordResetEmail(auth, email);
      navigate("/logIn");
    } catch (error) {
      toast.error("Email does not exist!");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center bg-body h-screen w-full px-3">
      <div className="md:p-8 px-4 py-8 mt-8 max-w-430 w-full rounded-md bg-white">
        <div>
          <header className="text-3xl text-login text-center font-semibold">Password Recovery</header>
          <form onSubmit={handlePasswordRecover}>
            <Field name={email} setName={setEmail} type="email" placeholder="Email" />
            <div className="relative h-12 w-full mt-5 rounded-md">
              <button className="w-full h-full text-white bg-login hover:bg-loginHover cursor-pointer text-base font-normal border-none rounded-md transition">
                Send
                <div className="absolute top-1/2 right-0 -translate-y-1/2">{isLoading && <Spinner />}</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
