import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseHelper";
import { DotLoader } from "react-spinners";

const Login = () => {
    const [err, setError] = useState(false);
  const history = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      setError(true);
      await signInWithEmailAndPassword(auth, email, password);
        history("/");
        setError(false);
    } catch (err) {
      setError(true);
    }
  };
  
  return (
    <div className="flex bg-gray-200 justify-center items-center overflow-hidden h-screen w-full">
      <div className=" w-2/6 bg-white shadow-xl rounded-xl p-7">
        <div className="flex  mb-10">
        <h1 className=" text-green-700 font-bold text-3xl">
              <span className="text-yellow-900">e-</span>Votes
            </h1>
        </div>

        <div className="w-full items-center justify-center text-center mb-12">
          <span>Please login with your E-mail and password</span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full items-center justify-center text-center"
        >
          <input
            type="text"
            placeholder="Email or Username"
            className="w-4/5 outline-none py-2 rounded-lg px-5 mb-5 border-gray-400 border-2"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-4/5 outline-none py-2 rounded-lg px-5 mb-5 border-gray-400 border-2"
          />

          <div>
            {
              err === true ? ( <div className="flex items-center justify-center">
                <DotLoader color="green" size={40}/>
              </div>):(<button className=" bg-green-700 w-4/5 py-2 rounded-full mb-8 text-white font-semibold hover:bg-green-400">
              Sign In
            </button>)
            }
            
          </div>
        </form>
        <div className="flex justify-center items-center">
          <span>Not a member?</span>
          <Link to="/register" className="text-green-700 pl-2 cursor-pointer">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
