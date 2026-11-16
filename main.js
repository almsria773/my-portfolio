let link=document.querySelector(".links")
let bar=document.querySelector(".icon-ham #bar")
let close=document.querySelector(".icon-ham #close")
bar.onclick=_ =>{
          link.classList.add("active")
          bar.style.display="none"
          close.style.display="block"
}
close.onclick=_ =>{
          link.classList.remove("active")
          bar.style.display="block"
          close.style.display="none"
          
}
document.addEventListener("keydown",(e)=>{
          if (e.key==="Enter"){
                    link.classList.add("active")
          }
})
document.addEventListener("keydown",(e)=>{
          if (e.key==="Escape"){
                    link.classList.remove("active")
          }
          
})
