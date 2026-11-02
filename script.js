(function(){
const S=window.SITE,$=id=>document.getElementById(id),Q=new URLSearchParams(location.search);
const abrirTudo=Q.has('abrirtudo');
const esc=t=>String(t).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const par=t=>String(t).split('\n').map(l=>l.trim()?`<p>${esc(l)}</p>`:'').join('');
const pl=(n,u,p)=>n===1?u:p;
document.title=S.tituloPagina||document.title;

/* textos fixos */
$('dica').textContent=S.envelope.dica;$('envFrase').textContent=S.envelope.frase;
$('envMonograma').textContent=S.nomes.ela[0];$('btnAbrir').textContent=S.envelope.botao;
$('nomeEla').textContent=S.nomes.ela;$('nomeEle').textContent=S.nomes.ele;
$('heroFrase').textContent=S.hero.frase;$('rodapeTxt').textContent=S.rodape;

/* toast */
let tt;function toast(m){const t=$('toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),3200)}

/* modal */
const modal=$('modal'),caixa=$('modalCaixa');let navFn=null;
function abrirModal(html,cls){caixa.className='modal-caixa '+(cls||'');caixa.innerHTML='<button class="modal-x" aria-label="Fechar">✕</button>'+html;caixa.querySelector('.modal-x').onclick=()=>modal.close();if(!modal.open)modal.showModal()}
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
modal.addEventListener('close',()=>{navFn=null});
document.addEventListener('keydown',e=>{if(navFn&&modal.open){if(e.key==='ArrowRight')navFn(1);if(e.key==='ArrowLeft')navFn(-1)}});

/* fotos com fallback de extensão */
function img(src,alt,cls){
  const exts=['jpg','jpeg','png','webp'],base=src.replace(/\.\w+$/,''),i=new Image();
  let k=exts.indexOf(src.split('.').pop().toLowerCase());const tent=exts.filter((_,x)=>x!==k);
  i.alt=alt||'';i.loading='lazy';if(cls)i.className=cls;i.src=src;
  i.onerror=()=>{const e=tent.shift();if(e)i.src=base+'.'+e;else{const p=document.createElement('div');p.className='ph';p.textContent='♥';i.replaceWith(p)}};
  return i}

/* confete / corações */
const fx=$('fx'),fc=fx.getContext('2d');let parts=[],fxOn=false;
function rs(){fx.width=innerWidth;fx.height=innerHeight}rs();addEventListener('resize',rs);
function chuva(n,x,y){const cs=['#f0b544','#b9a6f5','#f06a8e','#fff'];
  for(let i=0;i<n;i++)parts.push({x:x??Math.random()*fx.width,y:y??-20,vx:(Math.random()-.5)*(y?10:3),vy:y?-Math.random()*9-3:Math.random()*3+2,s:Math.random()*14+10,c:cs[i%4],h:Math.random()<.5,l:200});
  if(!fxOn){fxOn=true;loopFx()}}
function loopFx(){fc.clearRect(0,0,fx.width,fx.height);parts=parts.filter(p=>p.y<fx.height+30&&p.l>0);
  parts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.08;p.l--;fc.globalAlpha=Math.min(1,p.l/40);fc.fillStyle=p.c;
    if(p.h){fc.font=p.s+'px serif';fc.fillText('♥',p.x,p.y)}else fc.fillRect(p.x,p.y,p.s/2,p.s/3)});
  if(parts.length)requestAnimationFrame(loopFx);else fxOn=false}

/* pétalas do hero */
(function(){const c=$('petalas'),x=c.getContext('2d');let w,h,ps=[];
  function r(){w=c.width=c.offsetWidth;h=c.height=c.offsetHeight}r();addEventListener('resize',r);
  for(let i=0;i<34;i++)ps.push({x:Math.random()*1e3,y:Math.random()*1e3,s:Math.random()*8+5,v:Math.random()*.8+.4,a:Math.random()*6,d:Math.random()*.02+.005});
  (function f(){x.clearRect(0,0,w,h);ps.forEach(p=>{p.y+=p.v;p.a+=p.d;p.x+=Math.sin(p.a)*.7;if(p.y>h+10){p.y=-10;p.x=Math.random()*w}
    x.save();x.translate(p.x%w,p.y);x.rotate(p.a);x.fillStyle='#b9a6f588';x.beginPath();x.ellipse(0,0,p.s,p.s/2,0,0,7);x.fill();x.restore()});requestAnimationFrame(f)})()})();

/* contador */
const ini=new Date(S.inicio),mar=new Date(S.marco.data);
function tick(){const n=new Date();let y=n.getFullYear()-ini.getFullYear(),m=n.getMonth()-ini.getMonth(),d=n.getDate()-ini.getDate();
  if(d<0){m--;d+=new Date(n.getFullYear(),n.getMonth(),0).getDate()}if(m<0){y--;m+=12}
  const ms=n-ini,H=n.getHours(),M=n.getMinutes(),Sg=n.getSeconds();
  const set=(i,v,u,p)=>{$(i).textContent=v;$(i+'R').textContent=pl(v,u,p)};
  set('cAnos',y,'ano','anos');set('cMeses',m,'mês','meses');set('cDias',d,'dia','dias');
  set('cHoras',H,'hora','horas');set('cMin',M,'minuto','minutos');set('cSeg',Sg,'segundo','segundos');
  $('contTotal').textContent=`${Math.floor(ms/864e5).toLocaleString('pt-BR')} dias de nós, ou ${Math.floor(ms/36e5).toLocaleString('pt-BR')} horas`;
  const f=mar-n,dd=Math.ceil(f/864e5);
  $('marco').innerHTML=f>0?`Faltam <b>${dd}</b> ${pl(dd,'dia','dias')} para <b>${esc(S.marco.titulo)}</b>`:`✨ Hoje: <b>${esc(S.marco.titulo)}</b> ✨`}
tick();setInterval(tick,1000);

/* linha do tempo */
S.linhaDoTempo.forEach((e,i)=>{const li=document.createElement('li');li.className='item rev';
  li.innerHTML=`<div class="item-data">${esc(e.data)}</div><h3>${esc(e.titulo)}</h3><p>${esc(e.resumo||'')}</p><div class="item-btns"></div>`;
  const b=li.querySelector('.item-btns');
  if(e.foto){const x=document.createElement('button');x.className='btn-peq';x.textContent='📷 Ver foto';
    x.onclick=()=>{abrirModal('<div class="fm"></div><div class="modal-leg">'+esc(e.legenda||e.titulo)+'</div>','foto-m');caixa.querySelector('.fm').append(img(e.foto,e.titulo))};b.append(x)}
  if(e.mensagem){const x=document.createElement('button');x.className='btn-peq';x.textContent='💌 Ler mensagem';
    x.onclick=()=>{abrirModal(`<div class="carta-papel"><h3>${esc(e.titulo)}</h3>${par(e.mensagem)}<p class="carta-assin">Com amor, ${esc(S.de)}</p></div>`);chuva(10,innerWidth/2,innerHeight*.8)};b.append(x)}
  $('linha').append(li)});

/* galeria */
let gi=0;
function verFoto(d){gi=(gi+d+S.galeria.length)%S.galeria.length;const g=S.galeria[gi];
  abrirModal(`<div class="fm"></div><div class="modal-leg">${esc(g.legenda)}</div><div class="modal-nav"><button data-d="-1">‹ Anterior</button><span>${gi+1}/${S.galeria.length}</span><button data-d="1">Próxima ›</button></div>`,'foto-m');
  caixa.querySelector('.fm').append(img(g.arquivo,g.legenda));caixa.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>verFoto(+b.dataset.d));navFn=verFoto}
S.galeria.forEach((g,i)=>{const b=document.createElement('button');b.className='foto rev';b.append(img(g.arquivo,g.legenda));
  b.insertAdjacentHTML('beforeend',`<span class="leg">${esc(g.legenda)}</span>`);b.onclick=()=>{gi=i;verFoto(0)};$('galeriaGrade').append(b)});

/* trilha (Spotify/YouTube) */
if(S.musicaLink){let u=S.musicaLink,src='';
  const sp=u.match(/open\.spotify\.com\/(?:intl-\w+\/)?(track|playlist|album)\/(\w+)/),yt=u.match(/(?:youtu\.be\/|v=)([\w-]{11})/),ytl=u.match(/list=([\w-]+)/);
  if(sp)src=`https://open.spotify.com/embed/${sp[1]}/${sp[2]}`;else if(yt)src=`https://www.youtube.com/embed/${yt[1]}`;else if(ytl)src=`https://www.youtube.com/embed/videoseries?list=${ytl[1]}`;
  if(src){$('trilha').hidden=false;$('trilhaPlayer').innerHTML=`<iframe src="${src}" allow="autoplay;encrypted-media" loading="lazy"></iframe>`}}

/* cartas */
S.cartas.forEach(c=>{const lib=c.liberarEm?new Date(c.liberarEm):null,tr=lib&&lib>new Date()&&!abrirTudo;
  const b=document.createElement('button');b.className='carta rev'+(tr?' trancada':'');
  b.innerHTML=`<div class="carta-ico">${tr?'🔒':'💌'}</div><h3>${esc(c.titulo)}</h3><small>${tr?'Abre em '+lib.toLocaleDateString('pt-BR'):esc(c.quando||'')}</small>`;
  b.onclick=()=>{if(tr)return toast(`Calma, amor 💜 Esta carta abre em ${lib.toLocaleDateString('pt-BR')}.`);
    abrirModal(`<div class="carta-papel"><h3>${esc(c.titulo)}</h3>${par(c.texto)}<p class="carta-assin">Com todo amor, ${esc(S.de)}</p></div>`);chuva(14,innerWidth/2,innerHeight*.85)};
  $('cartasGrade').append(b)});

/* motivos */
let fila=[],usados=0;
$('btnMotivo').onclick=()=>{if(!fila.length){fila=S.motivos.map((_,i)=>i).sort(()=>Math.random()-.5);if(usados)toast('Recomeçando a lista, tem motivo de sobra 💜')}
  const m=S.motivos[fila.pop()];usados++;const c=$('motivoCartao');c.classList.remove('troca');void c.offsetWidth;c.textContent=m;c.classList.add('troca');
  $('motivoCont').textContent=`${usados} ${pl(usados,'motivo descoberto','motivos descobertos')}`;
  const r=$('btnMotivo').getBoundingClientRect();chuva(8,r.left+r.width/2,r.top)};

/* quiz */
let qi=0,pts=0;
function quiz(){const box=$('quizBox'),q=S.quiz[qi];
  if(!q){const r=pts/S.quiz.length,res=[...S.quizResultados].reverse().find(x=>r>=x.min)||S.quizResultados[0];
    box.innerHTML=`<div class="quiz-fim"><div class="nota">${pts}/${S.quiz.length}</div><h3>${esc(res.titulo)}</h3><p>${esc(res.texto)}</p><br><button class="btn btn-iris">Jogar de novo</button></div>`;
    box.querySelector('button').onclick=()=>{qi=0;pts=0;quiz()};if(r>=.8)chuva(60);return}
  box.innerHTML=`<div class="quiz-prog"><i style="width:${qi/S.quiz.length*100}%"></i></div><h3>${esc(q.pergunta)}</h3>`;
  q.opcoes.forEach((o,i)=>{const b=document.createElement('button');b.className='op';b.textContent=o;
    b.onclick=()=>{box.querySelectorAll('.op').forEach((x,j)=>{x.disabled=true;if(j===q.correta)x.classList.add('certa')});
      if(i===q.correta)pts++;else b.classList.add('errada');
      box.insertAdjacentHTML('beforeend',`<p class="quiz-exp">${esc(q.explicacao||'')}</p><button class="btn btn-iris">${qi+1<S.quiz.length?'Próxima':'Ver resultado'}</button>`);
      box.lastElementChild.onclick=()=>{qi++;quiz()}};box.append(b)})}
quiz();

/* pergunta final */
const F=S.final;let nao=0;
$('finalPergunta').textContent=F.pergunta;$('btnSim').textContent=F.sim;$('btnNao').textContent=F.frasesNao[0];
function aceitar(){$('finalPalco').hidden=true;$('finalResposta').hidden=false;$('finalTitulo').textContent=F.tituloResposta;
  $('finalMsg').innerHTML=par(F.mensagem).replace(/<p>/g,'<p style="margin-bottom:10px">');
  if(F.whatsapp){const z=$('finalZap');z.hidden=false;z.href=`https://wa.me/${F.whatsapp}?text=${encodeURIComponent(F.textoWhatsapp)}`}
  chuva(160);setTimeout(()=>chuva(100),900);$('final').scrollIntoView({behavior:'smooth'})}
$('btnSim').onclick=aceitar;
$('btnNao').onclick=()=>{nao++;const n=F.frasesNao.length-1;
  if(nao>=n){$('btnNao').textContent=F.desistiu;$('btnNao').onclick=aceitar;$('btnSim').style.transform='scale(1.15)';return}
  $('btnNao').textContent=F.frasesNao[nao];$('btnSim').style.transform=`scale(${1+nao*.12})`;
  $('btnNao').style.transform=`translate(${(Math.random()-.5)*60}px,${(Math.random()-.5)*20}px)`};

/* segredo */
let sc=0,st;$('segredo').onclick=()=>{sc++;clearTimeout(st);st=setTimeout(()=>sc=0,2500);
  if(sc>=7){sc=0;abrirModal(`<div class="carta-papel"><h3>💜 Segredinho</h3>${par(S.segredo)}</div>`);chuva(80)}};

/* botão de carinho */
let fi=0;$('fab').onclick=e=>{toast(S.frasesRapidas[fi++%S.frasesRapidas.length]);const r=e.currentTarget.getBoundingClientRect();chuva(10,r.left+27,r.top)};

/* música */
const au=$('audio'),pb=$('pPlay');let mi=0;
const M=S.musicas||[];
function carrega(i){mi=(i+M.length)%M.length;au.src=M[mi].arquivo;$('pTitulo').textContent=M[mi].titulo;$('pSub').textContent=`${S.nomes.ela} & ${S.nomes.ele}`}
function icone(){pb.textContent=au.paused?'▶':'❚❚'}
if(M.length){carrega(0);$('pProx').textContent='⏭';
  pb.onclick=()=>{au.paused?au.play().catch(()=>toast('Coloque os arquivos na pasta musicas/ 🎵')):au.pause()};
  $('pProx').onclick=()=>{carrega(mi+1);au.play().catch(()=>{})};
  au.onplay=au.onpause=icone;au.onended=()=>{carrega(mi+1);au.play().catch(()=>{})};
  au.onerror=()=>{const ex=['mp3','m4a','ogg','wav'],a=au.src.split('.').pop().toLowerCase();au._t=(au._t||[]).concat(a);
    const n=ex.find(e=>!au._t.includes(e));if(n)au.src=M[mi].arquivo.replace(/\.\w+$/,'.'+n);else{au._t=[];$('pSub').textContent='arquivo não encontrado'}};
  icone()}

/* abrir envelope */
let aberto=false;
function abrir(){if(aberto)return;aberto=true;$('envelope').classList.add('aberto');
  const ir=()=>{$('abertura').classList.add('sai');document.body.classList.remove('travado');$('site').hidden=false;$('dock').hidden=M.length?false:true;
    $('dock').hidden=false;setTimeout(()=>$('abertura').remove(),1100);chuva(70);if(M.length)au.play().catch(()=>{});obs()};
  Q.has('pular')?ir():setTimeout(ir,1500)}
$('envelope').onclick=abrir;$('btnAbrir').onclick=abrir;

/* revelar ao rolar + menu */
function obs(){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');o.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.rev').forEach(x=>o.observe(x));
  const h=$('inicio'),t=$('topo');new IntersectionObserver(([e])=>t.classList.toggle('on',!e.isIntersecting),{threshold:.3}).observe(h)}
if(Q.has('pular'))abrir();
})();
