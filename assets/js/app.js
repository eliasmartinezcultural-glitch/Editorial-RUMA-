(()=>{"use strict";
const items=(window.RUMA_CATALOG||[]).filter(x=>x.status!=="hidden"),cats=["Todas",...new Set(items.map(x=>x.category))];
const $=id=>document.getElementById(id);let cat="Todas",query="";
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function drawFilters(){$("filters").innerHTML=cats.map(c=>'<button class="filter" data-cat="'+esc(c)+'" aria-pressed="'+(c===cat)+'">'+esc(c)+'</button>').join("")}
function render(){let found=items.filter(x=>(cat==="Todas"||x.category===cat)&&[x.title,x.subtitle,x.description,x.category,x.audience].join(" ").toLocaleLowerCase("es").includes(query.toLocaleLowerCase("es")));
$("grid").innerHTML=found.map(x=>'<article class="card"><div class="cover" style="--cover:'+esc(x.cover||"#dce8d9")+';--coverink:'+esc(x.coverInk||"#24483f")+'"><span>'+esc(x.icon||"✳")+'</span><strong>'+esc(x.title)+'</strong></div><div class="body"><span class="category">'+esc(x.category)+'</span><h3>'+esc(x.title)+'</h3><p>'+esc(x.subtitle||x.description)+'</p><div class="bottom"><span class="price">'+esc(x.price||"Consultar")+'</span><span class="status '+(x.status==="available"?"live":"")+'">'+esc(x.statusLabel||"Próximamente")+'</span><a class="details" href="#" data-id="'+esc(x.id)+'">DETALLE ↗</a></div></div></article>').join("");
$("count").textContent=found.length+" publicaciones";$("empty").hidden=found.length>0}
$("filters").addEventListener("click",e=>{let b=e.target.closest("[data-cat]");if(!b)return;cat=b.dataset.cat;drawFilters();render()});
$("search").addEventListener("input",e=>{query=e.target.value.trim();render()});
$("clear").addEventListener("click",()=>{cat="Todas";query="";$("search").value="";drawFilters();render()});
$("grid").addEventListener("click",e=>{let a=e.target.closest("[data-id]");if(!a)return;e.preventDefault();let x=items.find(i=>i.id===a.dataset.id);if(!x)return;
$("detailCover").textContent=x.icon||"✳";$("detailCover").style.background=x.cover||"#dce8d9";$("detailCategory").textContent=x.category;$("detailTitle").textContent=x.title;$("detailDescription").textContent=x.description;$("detailMeta").innerHTML=[x.audience,x.format,x.price].filter(Boolean).map(v=>"<span>"+esc(v)+"</span>").join("");
let acts=$("detailActions");acts.innerHTML="";if(x.sampleUrl){let a=document.createElement("a");a.href=x.sampleUrl;a.target="_blank";a.rel="noopener";a.textContent="Ver muestra";acts.append(a)}if(x.status==="available"&&x.purchaseUrl){let a=document.createElement("a");a.href=x.purchaseUrl;a.target="_blank";a.rel="noopener";a.textContent="Comprar";acts.append(a)}$("detailNote").textContent=x.note||"Publicación independiente de Editorial RUMA.";$("detail").showModal()});
$("close").addEventListener("click",()=>$("detail").close());$("detail").addEventListener("click",e=>{if(e.target===$("detail"))$("detail").close()});
$("menuToggle").addEventListener("click",()=>{let open=$("nav").classList.toggle("open");$("menuToggle").setAttribute("aria-expanded",String(open))});
$("nav").addEventListener("click",e=>{if(e.target.closest("a")){$("nav").classList.remove("open");$("menuToggle").setAttribute("aria-expanded","false")}});
$("year").textContent=new Date().getFullYear();drawFilters();render();
})();