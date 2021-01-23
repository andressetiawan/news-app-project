import React from "react";
import "../styles/Homepages.scss";
import { ReactComponent as NewsIconSvg } from "../assets/news.svg";
import { ReactComponent as GoogleIconSvg } from "../assets/google-icon.svg";
import GoogleLogin from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

const Homepages = () => {
  const dispatch = useDispatch();

  const login = (res) => {
    dispatch(setSignedIn(true));
    dispatch(setUserData(res.profileObj));
  };

  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
      <div className="home__message">
        <NewsIconSvg className="icon__news" />
        <div className="desc__news">
          <h1>
            For <span className="desc__underline">Readers</span> by{" "}
            <span className="desc__underline">Readers</span>!
          </h1>
          <p>
            We provide you a free and high quality news and blogs. Just sign up
            and start explore the internet!
          </p>
        </div>

        <GoogleLogin
          clientId="841024188266-lct8fkrum51u3iuucr2mt02mtk7cec3h.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              disabled={renderProps.disabled}
              onClick={renderProps.onClick}
              className="btn__login"
            >
              <GoogleIconSvg className="icon__google" />
              Login with Google
            </button>
          )}
          onSuccess={login}
          onFailure={login}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default Homepages;
