import React from "react";
// import Article from "./Article";
import blogData from "../data/blog"


 console.log(blogData) 
 const posts = 
    [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ]


 
 function ArticleList(){
    return(
        <main>
            {/* {{blogData: posts.map((post)=>{
                return(
    function posts(){
        return <Post key ={id} >id= {post.id} title = {post.title} date = {post.date} preview = {post.preview}/>
    })
 })
 }} */}
        </main>
    )
 }
 console.log (posts)

export default ArticleList;