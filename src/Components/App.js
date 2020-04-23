import React from "react";
import "../styles.css";
import PostList from './PostList'
const App = () => {

  const postsURL='';
  const users='https://jsonplaceholder.typicode.com/users';

  return (
    <div className="ui container">
    
        <PostList/>
    
    
    </div>
  );
};
export default App;
