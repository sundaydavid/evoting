import React from "react";

const ContestantCard = ({
  btn,
  profile,
  username,
  school,
  actions,
  voters,
  id,
}) => {
  return (
    <div className=" w-1/4 shadow-lg" onClick={actions} id={id}>
      <img
        src={profile}
        alt="ProfileImage"
        className=" object-cover w-full h-1/6"
      />
      <p className="flex flex-col justify-center items-center p-3 bg-green-700">
        <span className=" text-xl text-white font-black">{username}</span>
        <span className=" text-gray-300">{school}</span>
        <br />
        {voters}
        {btn}
      </p>
    </div>
  );
};

export default ContestantCard;
