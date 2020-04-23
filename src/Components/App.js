import React from "react";
import "../styles.css";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="colum">
          <SongList />
        </div>
        <div className="colum">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};
export default App;
