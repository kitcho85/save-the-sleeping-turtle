const music = document.getElementById("bgMusic");
const button = document.getElementById("musicBtn");

music.volume = 0.25;

let enabled = localStorage.getItem("music");

if(enabled===null){
enabled="on";
localStorage.setItem("music","on");
}

function updateButton(){

if(localStorage.getItem("music")=="on"){

button.innerHTML="🔊 Sound ON";

}else{

button.innerHTML="🔇 Sound OFF";

}

}

document.addEventListener("click",()=>{

if(localStorage.getItem("music")=="on"){

music.play();

}

},{once:true});

button.onclick=()=>{

if(localStorage.getItem("music")=="on"){

music.pause();
localStorage.setItem("music","off");

}else{

music.play();
localStorage.setItem("music","on");

}

updateButton();

};

updateButton();
