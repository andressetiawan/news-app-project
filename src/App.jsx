import React from "react";
import { useSelector } from "react-redux";
import Homepages from "./components/Homepages";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { selectSignedIn } from "./features/userSlice";

export default function App() {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className="App">
      <Homepages />
      <Navbar />
      {isSignedIn && <News />}
    </div>
  );
}
