// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML=navbar();


// let api=`https://masai-mock-api.herokuapp.com/news?q=${input}`
let input=document.getElementById('search_input').value;

let search=(event)=>{
    if(event=="Enter"){
        let input=document.getElementById('search_input').value;
        fetch(`https://masai-mock-api.herokuapp.com/news?q=${input}`).then((res)=>{
        res.json();
        }).then((res)=>{
            console.log(res)
        })
    }
}

search()