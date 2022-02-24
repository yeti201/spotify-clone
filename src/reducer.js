export const initialState = {
  user: null,
  token: null,
  playlists: [],
  playing: false,
  item: null,
  song: {
    preview_url:
      "https://p.scdn.co/mp3-preview/a6436224a4b9d0e56b70fb575a830768c22dd748?cid=e2e41c8d6bb1493aafdf90e15fb98a8a",
    name: "Saware",
    img: "https://i.scdn.co/image/ab67616d0000b2737037561f1e7a2c5ff3cd0a38",
    artists: "Pritam",
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_SONG":
      return {
        ...state,
        song: action.song,
      };
    default:
      return state;
  }
};

export default reducer;
