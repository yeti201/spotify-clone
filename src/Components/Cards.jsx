import React from "react";
import { useDataLayerValue } from "../DataLayer";
import "../Style/Cards.css";

export default function Cards() {
  const [{ Recent }, dispatch] = useDataLayerValue();

  const playSong = ({track}) => {
    let song = {
      preview_url: track.preview_url,
      img: track.album.images[0].url,
      name: track.name,
      artists: track.artists[0].name,
    };

    dispatch({
      type: "SET_SONG",
      song,
    });
  };

  return (
    <>
      <p className="recent_head">Recently played</p>
      <div className="cards">
        {Recent.map((item) => {
          return (
            <div
              className="card"
              onClick={() =>  playSong(item)}>
              <div className="card_data">
                <div className="display_card">
                  <img src={item.track.album.images[0].url} alt="" />
                  <h5>{item.track.album.name}</h5>
                  <p>{item.track.album.artists[0].name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
