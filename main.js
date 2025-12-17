
const openBtn=document.getElementById("openbtn")
const modal = document.getElementById("modal")
const closeBtn = document.getElementById("closebtn")

openBtn.addEventListener("click",function(){
    modal.style.display="flex"
})
closeBtn.addEventListener("click",function(){
    modal.style.display="none"
})
