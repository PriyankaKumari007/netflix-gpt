import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO,SUPPORTED_LANGUAGES} from "../utils/constant"
import {toggleGptSearchView} from "../utils/gptSlice";
import{changeLanguage} from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

  useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribe when component unMounts
    return ()=> unSubscribe();
  }, []);
 
  
  function handleGptSearch()
  {
    console.log("toggle");
    //Toggle my gpt search
    dispatch(toggleGptSearchView());
  }
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }

  function handleLangChange(e){
   const configLang =  e.target.value;
   dispatch(changeLanguage(configLang));
  }
   return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          { showGptSearch &&<select className="p-2 bg-gray-900 text-white m-2" onChange={handleLangChange}>
            {SUPPORTED_LANGUAGES.map((lang=> <option key ={lang.indentifier} value={lang.indentifier}>{lang.name}</option>))}
           
          </select>}
          <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg hover:bg-opacity-50 cursor-pointer" onClick={handleGptSearch}>{showGptSearch ? "Home Page":"Netflix GPT"}</button>
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white ">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
