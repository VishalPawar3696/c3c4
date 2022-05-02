// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML=navbar();

import sidebar from "../components/sidebar.js";
document.getElementById('sidebar').innerHTML=sidebar();

let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`


let containerr=document.querySelector('.news');

async function news(){
try{
    let res= await fetch(url);
    let data=await res.json();
let page=data.articles;

    append(page)
    console.log(data)

}catch(err){
    console.log(err);
}

}
news();
let array=[];

function append(data){
    data.forEach(function(el){
        let div=document.createElement('div');
        let title=document.createElement('h3');
        title.innerText=el.title;
        let img=document.createElement('img');
        img.src=el.urlToImage;
        let desc=document.createElement('p');
        desc.innerText=el.description;

        div.append(title,img,desc);
       containerr.append(div);

       div.addEventListener('click',()=>{
localStorage.setItem('news',JSON.stringify(array))
window.location.href='news.html';
       })
    })
}




