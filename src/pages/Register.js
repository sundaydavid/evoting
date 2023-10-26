import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";
import { auth, storage, db } from "../firebaseHelper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";

const Register = () => {
  const [err, setError] = useState(false);
  const [image, setImage] = useState(null);
  const history = useNavigate();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = e.target[0].files[0];
    const username = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;

    if (file == null || email === "") {
      alert("Image and Email Cannot be empty");
      setError(false);
    } else {
      try {
        setError(true);
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const storageRef = ref(storage, username);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          },
          (error) => {
            switch (error.code) {
              case "storage/unauthorized":
                console.log("Permission error");
                break;
              case "storage/canceled":
                console.log("storage/canceled");
                break;

              case "storage/unknown":
                console.log("storage/unknown");
                break;
            }
          },
          () => {
            setError(true);
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                await setDoc(doc(db, "users", res.user.uid), {
                  uid: res.user.uid,
                  username,
                  email,
                  photoURL: downloadURL,
                });

                history("/login");
              }
            );
            setError(false);
          }
        );
        setError(false);
      } catch (error) {
        setError(true);
      }
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
        <form
          onSubmit={handleSubmit}
          className="w-full items-center justify-center text-center"
        >
          <label
            className="flex items-center justify-center flex-col"
            htmlFor="file"
          >
            {image ? (
              <img
                src={image}
                alt=""
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  padding: "2px",
                  width: "100px",
                  height: "100px",
                  cursor: "pointer",
                }}
              />
            ) : (
              <FaImage
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "rgb(227, 229, 255)",
                  padding: "10px",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                color="#fafafa"
              />
            )}

            <span style={{ color: "gray" }}>
              Click on the circle to select profile image
            </span>
          </label>
          <input
            type="file"
            id="file"
            onChange={onImageChange}
            style={{ display: "none" }}
          />
          <input
            type="text"
            placeholder="Fullname"
            className="w-4/5 outline-none py-2 rounded-lg px-5 mb-5 border-gray-400 border-2 mt-10"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-4/5 outline-none py-2 rounded-lg px-5 mb-5 border-gray-400 border-2"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-4/5 outline-none py-2 rounded-lg px-5 mb-5 border-gray-400 border-2"
          />

          <div>
            {err === true ? (
              <div className="flex items-center justify-center">
                <DotLoader color="green" size={40} />
              </div>
            ) : (
              <button className=" bg-green-700 w-4/5 py-2 rounded-full mb-8 text-white font-semibold hover:bg-green-700">
                Sign In
              </button>
            )}
          </div>
        </form>
        <div className="flex justify-center items-center">
          <span>Not a member?</span>
          <Link to="/login" className="text-green-700 pl-2 cursor-pointer">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
