import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Lord Of Summer", duration: "5:45" },
    { title: "PennyWise", duration: "4:05" },
    { title: "Smell like teen spirit", duration: "2:15" },
    { title: "NoManKind", duration: "6:00" }
  ];
};

const selectedSongReducer = (selectedSong = songsReducer()[0], action) => {
  if (action.type === "SONG_SELECTED") {
    //we care like we do
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
