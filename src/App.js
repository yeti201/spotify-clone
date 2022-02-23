import './App.css';
import Login from './components/Login';
import {getTokenFromUrl} from "./components/Spotify"
import axios from 'axios';
import {useState, useEffect} from "react"



function App() {
const [token , setToken] = useState()

useEffect(() => {
  let {access_token} = getTokenFromUrl();
  setToken(access_token)
} , [])


const playlist = () => {
  console.log(token)
  axios.get("https://api.spotify.com/v1/me/playlists" , {
    headers : {
      Authorization: "Bearer "  + token,
    }
  }).then((res) => {
    console.log(res)
  }).catch(() =>{
    console.log("err")
  })
}


  return (
    <div className="App">
      {!token ? <Login /> : "done"}

      <button onClick={playlist}>playlists</button>

    </div>
  );
}

export default App;
