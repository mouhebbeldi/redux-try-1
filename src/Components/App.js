import React from "react";
import "../styles.css";
import PostList from './PostList';
import Navbar from './navigation/Navbar';
// import Navbar from './navigation/Navbar2';

const App = () => {


  return (
    <div className="">
      <Navbar/>
      <main>

        <div className="ui container "  /**className='posts-lists' */>
          <PostList/>
        </div>
      </main>
    </div>
  );
};
export default App;
