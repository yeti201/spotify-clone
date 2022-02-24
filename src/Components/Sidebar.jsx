import React from "react";
import "../Style/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { LibraryMusic } from "@material-ui/icons";
import { useDataLayerValue } from "../DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  const SetHomepage = () => {
    console.log("yes");
    dispatch({
      type: "SET_PAGE",
      Page: "Home",
    });
  };

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />
      <div>
        <div className="sidebarOption" onClick={SetHomepage}>
          <HomeIcon className="sidebarOption__icon" />
          <span>Home</span>
        </div>
        <div className="sidebarOption" onClick={SetHomepage}>
          <SearchIcon className="sidebarOption__icon" /> <span>Search</span>
        </div>
        <div className="sidebarOption" onClick={SetHomepage}>
          <LibraryMusic className="sidebarOption__icon" />
          <span>Your Library</span>
        </div>
      </div>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption
          title={playlist.name}
          key={playlist.id}
          getP={playlist}
        />
      ))}
    </div>
  );
}

export default Sidebar;
