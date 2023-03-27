import React, { useRef } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Link, useNavigate } from "react-router-dom";

const User = () => {
  const dataUser = useSelector((state) => state.user);
  const listRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    listRef.current.classList.toggle("hidden");
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      navigate("/logIn");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center">
      <IoNotificationsOutline className="text-white text-2xl mr-4 transition cursor-pointer" />
      <div className="relative">
        {dataUser.photoURL ? (
          <img onClick={handleClick} src={dataUser.photoURL} alt="avatar" className="w-8 rounded-full cursor-pointer" />
        ) : (
          <button onClick={handleClick} className="w-8 h-8 rounded-full bg-green-400 text-white">
            {dataUser.email.slice(0, 1).toUpperCase()}
          </button>
        )}
        <ul ref={listRef} className="p-4 bg-white text-black absolute top-[110%] right-0 z-10 rounded hidden">
          <Link to="/user" className="block w-full cursor-pointer border-b">
            User
          </Link>
          <li onClick={handleSignOut} className="w-max cursor-pointer">
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
