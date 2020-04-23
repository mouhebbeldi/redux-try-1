import { combineReducers } from "redux";



export default combineReducers({
  songs: ()=>'songsReducer',
  selectedSong: ()=>'selectedSongReducer'
});
