import React from "react";
import Article from  "./Article";
function ArticleList ({posts}){
const article = posts.map((posts) => (
    <Article
    key={posts.id}
    title={posts.title}
    date = {posts.date}
    preview={posts.preview}></Article>
));
return <main>{article}</main>

}
export default ArticleList;
