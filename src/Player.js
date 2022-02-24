import React, { useEffect } from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import { useDataLayerValue } from "./DataLayer";

function Player({ spotify }) {
  let [{ song }] = useDataLayerValue();


  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer song={song} />
    </div>
  );
}

export default Player;
