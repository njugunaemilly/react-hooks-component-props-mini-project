import React from "react";
// import Article from "./ArticleList";

function Article(){
    return(
        <article>
            <h3>{post.title}</h3>
            <small>{post.date}</small>
            <p>{post.preview}</p>
        </article>
    )
}

export default Article;
