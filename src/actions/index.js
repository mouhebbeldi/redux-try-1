// action creator
export const selectSong = song => {
  // returning a action :
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
