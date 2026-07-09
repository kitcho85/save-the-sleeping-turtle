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
