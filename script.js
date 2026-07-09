window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.95)";
header.style.boxShadow="0 10px 30px rgba(212,175,55,.15)";

}else{

header.style.background="rgba(0,0,0,.85)";
header.style.boxShadow="none";

}

});

const stats=document.querySelectorAll(".stat h2");

stats.forEach(stat=>{

stat.style.opacity="0";

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

stat.style.opacity="1";
stat.animate([
{transform:"translateY(40px)",opacity:0},
{transform:"translateY(0)",opacity:1}
],{
duration:1000,
fill:"forwards"
});

}

});

});

observer.observe(stat);

});

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;
const y=e.offsetY;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(212,175,55,.20),
#111 60%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#111";

});

});

function openForm(){

document.getElementById("offerPopup").style.display="block";

}

function closeForm(){

document.getElementById("offerPopup").style.display="none";

}

window.onclick=function(event){

const popup=document.getElementById("offerPopup");

if(event.target==popup){

popup.style.display="none";

}

}