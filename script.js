// Floating hearts
for(let i=0;i<15;i++){
  const h=document.createElement('div');
  h.classList.add('heart');
  h.style.left=Math.random()*100+'vw';
  h.style.animationDuration=(Math.random()*5+5)+'s';
  h.style.opacity=Math.random();
  document.body.appendChild(h);
}

// Confetti
const colors=['#ba68c8','#f48fb1','#ce93d8','#8e24aa','#ff80ab'];
for(let i=0;i<120;i++){
  const conf=document.createElement('div');
  conf.classList.add('confetti');
  conf.style.left=Math.random()*100+'vw';
  conf.style.background=colors[Math.floor(Math.random()*colors.length)];
  conf.style.animationDuration=(Math.random()*3+2)+'s';
  conf.style.width=conf.style.height=(Math.random()*6+4)+'px';
  document.body.appendChild(conf);
}

// Fade-in gallery cards on scroll
const cards=document.querySelectorAll('.card');
window.addEventListener('scroll',()=>{
  cards.forEach(card=>{
    const rect=card.getBoundingClientRect();
    if(rect.top<window.innerHeight-100){
      card.classList.add('show');
    }
  });
});

// Music player toggle
const music=document.getElementById('bgMusic');
function toggleMusic(){
  if(music.paused){music.play();}else{music.pause();}
}

// Show scroll-to-top button
const toTop=document.getElementById('toTop');
window.addEventListener('scroll',()=>{
  if(window.scrollY>300){
    toTop.style.display='block';
  }else{
    toTop.style.display='none';
  }
});
