(() => {
 const menuButton=document.querySelector('.menu-toggle'),nav=document.querySelector('.primary-nav'),topButton=document.querySelector('.back-to-top'),year=document.querySelector('#current-year');
 if(year)year.textContent=new Date().getFullYear();
 if(menuButton&&nav){
  menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);menuButton.setAttribute('aria-label',open?'Open navigation':'Close navigation')});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation')}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.focus()}});
 }
 if(topButton){const update=()=>topButton.classList.toggle('visible',window.scrollY>450);window.addEventListener('scroll',update,{passive:true});update();topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}))}
})();