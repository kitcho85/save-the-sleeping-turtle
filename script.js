// ===============================
// Section Animation
// ===============================

const sections = document.querySelectorAll(
".about,.features,.screenshots,.characters,.contact,.links"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("showSection");

}

});

},{
threshold:0.15
});

sections.forEach(section=>{

observer.observe(section);

});

// ===============================
// Background Music
// ===============================

const music = document.getElementById("bgMusic");
const button = document.getElementById("musicBtn");

if(music && button){

music.volume = 0.25;

let enabled = localStorage.getItem("music");

if(enabled===null){

enabled="on";
localStorage.setItem("music","on");

}

function updateButton(){

if(localStorage.getItem("music")==="on"){

button.innerHTML="🔊 Sound ON";

}else{

button.innerHTML="🔇 Sound OFF";

}

}

document.addEventListener("click",()=>{

if(localStorage.getItem("music")==="on"){

music.play().catch(()=>{});

}

},{once:true});

button.addEventListener("click",()=>{

if(localStorage.getItem("music")==="on"){

music.pause();
localStorage.setItem("music","off");

}else{

music.play().catch(()=>{});
localStorage.setItem("music","on");

}

updateButton();

});

updateButton();

}
