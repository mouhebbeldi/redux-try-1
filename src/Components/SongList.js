import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="" key={song.title}>
          <div className="">
            <button className="" onClick={() => this.props.selectSong(song)}>
              Select{" "}
            </button>
          </div>
          <div className="">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
