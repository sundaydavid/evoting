import React, { useEffect, useState } from "react";
import ContestantCard from "../components/ContestantCard";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebaseHelper";

const VotingBoard = () => {
  const [president, setPresident] = useState([]);
  const [viceP, setViceP] = useState([]);
  const [otherP, setOtherP] = useState([]);

  const [isCordVote, setIsCordVote] = useState(false);
  const [isSecVote, setIsSecVote] = useState(false);
  const [isPubVote, setIsPubVote] = useState(false);

  const PresidentCollectionRef = collection(db, "contestant");
  const vicePCollectionRef = collection(db, "viceP");
  const othersCollectionRef = collection(db, "pubR");
  const user = auth.currentUser;

  const getContestant = async () => {
    const cordinator = await getDocs(PresidentCollectionRef);
    const secretary = await getDocs(vicePCollectionRef);
    const pubOddicer = await getDocs(othersCollectionRef);
    setPresident(cordinator.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setViceP(secretary.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setOtherP(pubOddicer.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getContestant();
    if (localStorage.getItem("cordVote")) {
      setIsCordVote(true);
    }
    if (localStorage.getItem("secVote")) {
      setIsSecVote(true);
    }
    if (localStorage.getItem("pubVote")) {
      setIsPubVote(true);
    }
  });

  const updateuser = async (id, voteCount) => {
    const count = voteCount + 1;
    await updateDoc(doc(db, "contestant", id), {
      votes: count,
    })
      .then(() => {
        localStorage.setItem("cordVote", user.uid);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const updateSec = async (id, voteCount) => {
    const count = voteCount + 1;
    await updateDoc(doc(db, "viceP", id), {
      votes: count,
    })
      .then(() => {
        localStorage.setItem("secVote", user.uid);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const updatePub = async (id, voteCount) => {
    const count = voteCount + 1;
    await updateDoc(doc(db, "pubR", id), {
      votes: count,
    })
      .then(() => {
        localStorage.setItem("pubVote", user.uid);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="w-full h-screen flex items-start justify-start px-20 py-6 flex-col">
      <span className="font-extrabold text-4xl text-green-800">All Aspirant</span>
      <br />

      <div className="w-full flex h-full flex-col">
        <div className="h-full flex items-start justify-center flex-col">
          <h1 className=" ml-14 text-2xl text-green-700 underline">Zonal Cordinator</h1>
          <div className="flex items-center justify-around w-full">
            {president &&
              president.map((item) => {
                return (
                  <ContestantCard
                    id={item.id}
                    btn={
                      isCordVote === true ? (
                        <span className="mt-4 text-green-700">
                          Vote count
                        </span>
                      ) : (
                        <button
                          className="rounded-full bg-green-300 py-2 px-5 w-full text-white mt-5"
                          onClick={() => updateuser(item.id, item.votes)}
                        >
                          Cast Vote
                        </button>
                      )
                    }
                    username={item.name}
                    profile={item.passport}
                    school={item.school}
                    voters={
                      <p className=" text-gray-300">
                        Total Vote:{" "}
                        <span className=" text-white font-black">
                          {item.votes}
                        </span>
                      </p>
                    }
                  />
                );
              })}
          </div>
        </div>

        <br />
        <br />
        <hr />

        <div className="h-full flex items-start justify-center flex-col mt-6">
          <h1 className=" ml-14 text-2xl text-green-700 underline">General Secretary</h1>
          <div className="flex items-center justify-around w-full">
            {viceP &&
              viceP.map((item) => {
                return (
                  <ContestantCard
                    id={item.id}
                    btn={
                      isSecVote === true ? (
                        <span className="mt-4 text-green-700">
                          Vote count
                        </span>
                      ) : (
                        <button
                          className="rounded-full bg-green-300 py-2 px-5 w-full text-white mt-5"
                          onClick={() => updateSec(item.id, item.votes)}
                        >
                          Cast Vote
                        </button>
                      )
                    }
                    username={item.name}
                    profile={item.passport}
                    school={item.school}
                    voters={
                      <p className=" text-gray-300">
                        Total Vote:{" "}
                        <span className=" text-white font-black">
                          {item.votes}
                        </span>
                      </p>
                    }
                  />
                );
              })}
          </div>
        </div>

        <br />
        <br />
        <hr />

        <div className="h-full flex items-start justify-center flex-col mt-6">
          <h1 className=" ml-14 text-2xl text-green-700 underline">Public Relation</h1>
          <div className="flex items-center justify-around w-full">
            {otherP &&
              otherP.map((item) => {
                return (
                  <ContestantCard
                    id={item.id}
                    btn={
                      isPubVote === true ? (
                        <span className="mt-4 text-green-700">
                          Vote count
                        </span>
                      ) : (
                        <button
                          className="rounded-full bg-green-300 py-2 px-5 w-full text-white mt-5"
                          onClick={() => updatePub(item.id, item.votes)}
                        >
                          Cast Vote
                        </button>
                      )
                    }
                    username={item.name}
                    profile={item.passport}
                    school={item.school}
                    voters={
                      <p className=" text-gray-300">
                        Total Vote:{" "}
                        <span className=" text-white font-black">
                          {item.votes}
                        </span>
                      </p>
                    }
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingBoard;
