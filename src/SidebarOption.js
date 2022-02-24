import React from "react";
import "./SidebarOption.css";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function SidebarOption({ title, Icon, getP }) {
  const [{}, dispatch] = useDataLayerValue();
  const getplaylist = (id, Playlistname) => {
    dispatch({
      type: "SET_NAME",
      Playlistname,
    });

    spotify.getPlaylist(id).then((playlist) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: playlist,
      });
    });
  };

  return (
    <div
      className="sidebarOption"
      onClick={() => {
        getplaylist(getP.id, getP.name);
      }}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
