import React from "react"
function Article ({title, date ="January 1,1970",}){
    return(
        <article>
            <h1>{title}</h1>
            <small>{date}</small>
           
        </article>
    );

}
export default Article