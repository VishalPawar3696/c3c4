// Ude Import export (MANDATORY)

import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML=navbar();

let info=JSON.parse(localStorage.getItem('news'))||[];
// console.log(info)
// const info=Object.keys(info)
// console.log(info)
let container=document.getElementById("detailed_news").innerHTML=info.description;
append(info)

function append(info){
    info.forEach(function(el){
        let div=document.createElement('div');
        let title=document.createElement('h3');
        title.innerText=el.title;
        let img=document.createElement('img');
        img.src=el.urlToImage;
        let desc=document.createElement('p');
        desc.innerText=el.description;
    let author=document.createElement('h4');
    author.innerText=el.author;
    let content=document.createElement('p');
    content.innerText=el.content;
    let date=document.createElement('p');
    date.innerText=el.publishedAt;
    let source=document.createElement('p');
    source.innerText=el.source.name;

    div.append(title,img,content,desc,author,date,source);
  

detailed.append(div)



    })
}



