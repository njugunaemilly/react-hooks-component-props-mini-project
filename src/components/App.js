import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header"
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ArticleList />
  
    </div>
  );
}

export default App;
