import React from "react";
import "../styles.css";
import PostList from './PostList';
import Navbar from './navigation/Navbar';

const App = () => {


  return (
    <div className="">
      <Navbar/>
      <main>

        <div className="ui container">
          <PostList/>
        </div>
      </main>
    </div>
  );
};
export default App;
