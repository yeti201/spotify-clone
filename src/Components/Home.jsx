import React from "react";
import { useDataLayerValue } from "../DataLayer";

export default function Home() {
  const [{ Recent }, dispatch] = useDataLayerValue();

  return (
    <div>
      {Recent.map((e) => {
        console.log("mape", e);
      })}
    </div>
  );
}
