function spawnHearts(n){
  const root=document.querySelector(".hearts");
  const NS="http://www.w3.org/2000/svg";
  for(let i=0;i<n;i++){
    const size=14+Math.random()*24;
    const h=document.createElementNS(NS,"svg");
    h.setAttribute("class","heart");
    h.setAttribute("viewBox","0 0 32 29");
    h.style.width=size+"px";
    h.style.height=size+"px";
    h.style.left=Math.random()*100+"%";
    h.style.top=60+Math.random()*10+"%";
    h.style.setProperty("--x",(-50+Math.random()*100)+"vw");
    h.style.setProperty("--d",2+Math.random()*3+"s");
    const p=document.createElementNS(NS,"path");
    p.setAttribute("d","M23.6,0c-3,0-5.6,1.7-7.6,4.4C14,1.7,11.4,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.3,11.2,14.7,15.6,20.3C27.8,23.1,32,16.8,32,8.4C32,3.8,28.2,0,23.6,0z");
    h.appendChild(p);
    root.appendChild(h);
    setTimeout(()=>h.remove(),4500)
  }
}
const btn=document.getElementById("celebrate");
const overlay=document.getElementById("overlay");
const img=overlay.querySelector("img");
function openOverlay(){
  if(!img.complete){const a=new Image();a.src=img.src}
  overlay.classList.add("open");
  spawnHearts(50)
}
function closeOverlay(){overlay.classList.remove("open")}
btn.addEventListener("click",openOverlay);
overlay.addEventListener("click",e=>{if(e.target===overlay)closeOverlay()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeOverlay()});
window.addEventListener("load",()=>setTimeout(()=>spawnHearts(25),600));

