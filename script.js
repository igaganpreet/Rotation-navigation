const close=document.getElementById("close");
const open=document.getElementById("open");
const container=document.querySelector(".container");

close.addEventListener('click',()=>{
    console.log("clicked close");
    container.classList.remove("show-nav");
})
open.addEventListener('click',()=>{
    console.log("clicked open");
    container.classList.add("show-nav");
})