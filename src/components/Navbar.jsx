import React, { useState } from "react";
import "../styles/Navbar.scss";
import { ReactComponent as SearchIconSvg } from "../assets/search.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  selectSearchInput,
  setSignedIn,
  setUserData,
  setSearchInput,
} from "../features/userSlice";
import { GoogleLogout } from "react-google-login";
const Navbar = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);

  const initialSearchInput = useSelector(selectSearchInput);
  const [inputVal, setInputVal] = useState(initialSearchInput);

  const searchSubmit = () => {
    dispatch(setSearchInput(inputVal));
  };

  const logout = () => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  const Homepage = () => {
    if (isSignedIn) {
      dispatch(setSearchInput("covid"));
    }
  };

  return (
    <div className="navbar">
      <div className="navbar__header">
        <h1 className="navbar__logo" onClick={Homepage}>
          News App 📰
        </h1>
        {isSignedIn && (
          <>
            <div className="navbar__search">
              <input
                onChange={(e) => setInputVal(e.currentTarget.value)}
                type="text"
                className="news__search"
                name="news__search"
                placeholder="Just search, it's free..."
                value={inputVal}
              />
              <SearchIconSvg onClick={searchSubmit} className="icon__search" />
            </div>
            <div className="navbar__avatar">
              <img
                className="profile__picture"
                src={userData?.imageUrl}
                alt={userData?.name}
              />
              <h1>{userData?.givenName}</h1>
              <GoogleLogout
                clientId="841024188266-lct8fkrum51u3iuucr2mt02mtk7cec3h.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                    disabled={renderProps.disabled}
                    onClick={renderProps.onClick}
                    className="btn__logout"
                  >
                    Logout 😢
                  </button>
                )}
                onLogoutSuccess={logout}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
