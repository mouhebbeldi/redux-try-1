import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div> No Song Selected </div>;
  }

  return (
    <div className="songDetail">
      {" "}
      <h3>Details For </h3>
      Title: {song.title}
      <br />
      Duration: {song.duration}
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
