import React from "react";
import { useDataLayerValue } from "../DataLayer";
import "../Style/Cards.css"

export default function Cards() {
  const [{ Recent }, dispatch] = useDataLayerValue();
  console.log(Recent);

  return (
      <>
    <p className="recent_head">Recently played</p>
    <div className="cards">
      {Recent.map((e) => {
         
       return(
        <div className="card">
           <div className="card_data">
              <div className="display_card">
                <img src={e.track.album.images[0].url} alt="" />
                <h5>{e.track.album.name}</h5>
                <p>{e.track.album.artists[0].name}</p>
            </div>
           </div>
       </div>
       )
      })}
    </div>
    </>
  )
}
