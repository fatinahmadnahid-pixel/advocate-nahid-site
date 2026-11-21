var nav=document.getElementById('nav'),bg=document.getElementById('bg'),dr=document.getElementById('dr'),tp=document.getElementById('top'),secs=document.querySelectorAll('section[id]'),ls=document.querySelectorAll('.links a');
function sc(){nav.classList.toggle('s',scrollY>40);tp.classList.toggle('show',scrollY>500);var c='';secs.forEach(function(s){if(scrollY>=s.offsetTop-140)c=s.id});ls.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+c)})}
addEventListener('scroll',sc,{passive:true});sc();
function tg(o){bg.classList.toggle('o',o);bg.setAttribute('aria-expanded',o);dr.classList.toggle('o',o);document.body.style.overflow=o?'hidden':''}
bg.onclick=function(){tg(!dr.classList.contains('o'))};
document.querySelectorAll('.m').forEach(function(a){a.onclick=function(){tg(false)}});
addEventListener('keydown',function(e){if(e.key==='Escape')tg(false)});
addEventListener('resize',function(){if(innerWidth>1240)tg(false)});
tp.onclick=function(){scrollTo({top:0,behavior:'smooth'})};
