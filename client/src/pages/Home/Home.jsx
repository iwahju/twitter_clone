import React from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import MainTweet from "../../components/MainTweet/MainTweet";
import Signin from "../Signin/Signin";
import { UseSelector, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const {currentUser} = useSelector((state)=> state.user.currentUser);
  console.log("user", currentUser);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="px-6">
        <LeftSideBar />
      </div>
      <div className="col-span-2 border-x-2 border-t-slate-800 px-6">
        <MainTweet />
      </div>
      <div className="px-6">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
