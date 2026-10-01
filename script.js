const birthday = new Date("2026-10-02T00:00:00+08:00").getTime();

function updateCountdown(){
  const now = Date.now();
  let diff = birthday - now;
  const note = document.getElementById("countdown-note");

  if(diff <= 0){
    document.getElementById("days").textContent = "26";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    note.textContent = "Today is your day. Happy Birthday, Sayang. ♡";
    return;
  }

  const day = 86400000, hour = 3600000, minute = 60000;
  const d = Math.floor(diff/day); diff %= day;
  const h = Math.floor(diff/hour); diff %= hour;
  const m = Math.floor(diff/minute); diff %= minute;
  const s = Math.floor(diff/1000);

  document.getElementById("days").textContent = String(d).padStart(2,"0");
  document.getElementById("hours").textContent = String(h).padStart(2,"0");
  document.getElementById("minutes").textContent = String(m).padStart(2,"0");
  document.getElementById("seconds").textContent = String(s).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
  topBtn.classList.toggle("show",window.scrollY>700);
});
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

document.querySelectorAll(".masonry img").forEach(img=>{
  img.addEventListener("click",()=>{
    const overlay=document.createElement("div");
    overlay.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:100;display:grid;place-items:center;padding:5vw;cursor:zoom-out";
    const big=document.createElement("img");
    big.src=img.src;
    big.style.cssText="max-width:95vw;max-height:90vh;object-fit:contain;box-shadow:0 20px 80px rgba(0,0,0,.4)";
    overlay.appendChild(big);
    document.body.appendChild(overlay);
    overlay.addEventListener("click",()=>overlay.remove());
  });
});
