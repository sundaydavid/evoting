import { signOut } from "firebase/auth";
import { auth } from "../firebaseHelper";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navlinks = ["Home", "Vote", "About", "Contact"];
  const history = useNavigate()

  const renderNav = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;

    const handleClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({
        behavior: "smooth",
      });
    };

    return (
      <ul key={content} className="flex gap-10 text-gray-600">
        <li className="hover:text-green-700 hover:text-xl shadow-xl px-3 rounded-md ml-6">
          <button
            onClick={handleClickNav}
            // className={activeLinkId === content ? "activeClass" : ""}
          >
            {content}
          </button>
        </li>
      </ul>
    );
  };

  return (
    <div className=" fixed top-0 z-50">
      <header className="bg-white shadow-lg py-2 px-3 fixed w-full">
        <div className="px-12">
          <div className="flex items-center justify-between">
            <h1 className=" text-green-800 font-bold text-3xl cursor-pointer">
              <span className="text-yellow-900">e-</span>Votes
            </h1>
            <input
              type="text"
              placeholder="Search here..."
              className=" border-2 border-green-100 rounded-xl px-4 py-2 outline-2 outline-green-100 w-4/12"
            />
            <div className=" flex items-center">
              <nav className="flex items-center justify-center">
                {navlinks.map((nav) => renderNav(nav))}
               
                <span className="rounded-full shadow-3xl ml-20 border-2 border-green-200 px-4 cursor-pointer"  onClick={() => {signOut(auth); history("/login")}}>logout</span>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
