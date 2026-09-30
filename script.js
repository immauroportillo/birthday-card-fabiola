const curtain=document.getElementById('curtain');
const content=document.getElementById('content');
const openBtn=document.getElementById('openBtn');
const music=document.getElementById('music');
const musicBtn=document.getElementById('musicBtn');

openBtn.addEventListener('click',()=>{
  curtain.classList.add('leaving');
  content.classList.remove('hidden');
  requestAnimationFrame(()=>content.classList.add('visible'));
  music.volume=.55;
  music.play().then(()=>updateMusic(true)).catch(()=>updateMusic(false));
  musicBtn.classList.remove('hidden');
  setTimeout(()=>curtain.remove(),750);
  setTimeout(()=>document.querySelectorAll('.reveal').forEach((el,i)=>setTimeout(()=>el.classList.add('show'),i*150)),350);
});

function updateMusic(playing){
  musicBtn.textContent=playing?'♫':'🔇';
  musicBtn.setAttribute('aria-label',playing?'Pause background music':'Play background music');
}

musicBtn.addEventListener('click',()=>{
  if(music.paused) music.play().then(()=>updateMusic(true)).catch(()=>{});
  else {music.pause();updateMusic(false);}
});
