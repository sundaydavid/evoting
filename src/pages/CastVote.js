import React, { useEffect, useState } from "react";
import { useNav } from "../hooks/useNav";
import ContestantCard from "../components/ContestantCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseHelper";
import { useNavigate } from "react-router-dom";

const Vote = () => {
  const voteRef = useNav("Vote");
  const [contestant, setContestants] = useState([]);
  const PresidentCollectionRef = collection(db, "contestant");
  const history = useNavigate();

  const getContestant = async () => {
    const data = await getDocs(PresidentCollectionRef);
    setContestants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getContestant();
  },[contestant]);

  return (
    <section ref={voteRef} id="voteSection">
      <div className=" flex flex-col justify-center items-center h-full gap-20">
        <h1 className="font-bold text-4xl text-gray-600">
          <span className=" text-green-800 font-bold text-4xl">Nacos</span>{" "}
          Aspirants{" "}
          <span className=" text-green-700 font-bold text-4xl">2023-2024</span>
        </h1>

        <div className="flex items-center flex-col w-full justify-center">
          <div className="flex items-center w-full justify-center gap-10">
            {contestant &&
              contestant.map((item) => {
                return <ContestantCard school={item.school} profile={item.passport} username={item.name} actions={()=>history('/voting')}/>;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vote;
