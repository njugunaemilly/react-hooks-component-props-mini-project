import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header"
import About from "./About";
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header img={blogData.image}/>
      <About image={blogData.image}/>
      <ArticleList />
      <Article />
    </div>
  );
}

export default App;
