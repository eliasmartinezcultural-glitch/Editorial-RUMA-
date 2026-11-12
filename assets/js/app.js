(()=>{"use strict";
const all=(window.RUMA_CATALOG||[]).filter(x=>x.status!=="hidden");
const store=window.RUMA_STORE||{};
const $=id=>document.getElementById(id);
let cat="Todas",query="";
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const categories=["Todas",...new Set(all.map(x=>x.category).filter(Boolean))];
function setupStoreLink(){const link=document.getElementById("storeLink");if(!link)return;if(store.profileUrl){link.href=store.profileUrl;link.hidden=false;link.textContent="Visitar tienda RUMA ↗";}}
function drawFilters(){
 $("filters").innerHTML=categories.map(c=>'<button type="button" class="filter" data-cat="'+esc(c)+'" aria-pressed="'+(c===cat)+'">'+esc(c)+'</button>').join("");
}
function render(){
 const found=all.filter(x=>(cat==="Todas"||x.category===cat)&&[x.title,x.subtitle,x.description,x.category,x.audience,...(x.keywords||[])].join(" ").toLocaleLowerCase("es").includes(query.toLocaleLowerCase("es")));
 $("grid").innerHTML=found.map(x=>'<article class="card"><div class="cover" style="--cover:'+esc(x.cover||"#dce8d9")+';--coverink:'+esc(x.coverInk||"#24483f")+'"><span aria-hidden="true">'+esc(x.icon||"✳")+'</span><strong>'+esc(x.title)+'</strong></div><div class="body"><span class="category">'+esc(x.category||"Publicación")+'</span><h3>'+esc(x.title)+'</h3><p>'+esc(x.subtitle||x.description)+'</p><div class="bottom"><span class="price">'+esc(x.price||"Consultar")+'</span><span class="status '+(x.status==="available"?"live":"")+'">'+esc(x.statusLabel||(x.status==="available"?"Disponible":"En preparación"))+'</span><button class="details" type="button" data-id="'+esc(x.id)+'" aria-label="Ver detalles de '+esc(x.title)+'">DETALLE ↗</button></div></div></article>').join("");
 $("count").textContent=found.length+" "+(found.length===1?"publicación":"publicaciones");
 $("empty").hidden=found.length>0;
}
$("filters").addEventListener("click",e=>{const b=e.target.closest("[data-cat]");if(!b)return;cat=b.dataset.cat;drawFilters();render()});
$("search").addEventListener("input",e=>{query=e.target.value.trim();render()});
$("clear").addEventListener("click",()=>{cat="Todas";query="";$("search").value="";drawFilters();render();$("search").focus()});
$("grid").addEventListener("click",e=>{
 const b=e.target.closest("[data-id]");if(!b)return;
 const x=all.find(i=>i.id===b.dataset.id);if(!x)return;
 $("detailCover").textContent=x.icon||"✳";$("detailCover").style.background=x.cover||"#dce8d9";
 $("detailCategory").textContent=x.category||"Publicación";$("detailTitle").textContent=x.title;
 $("detailDescription").textContent=x.description||x.subtitle||"";
 const meta=[x.author,x.audience,x.format,x.pages,x.edition,x.price].filter(Boolean);
 $("detailMeta").innerHTML=meta.map(v=>"<span>"+esc(v)+"</span>").join("");
 const acts=$("detailActions");acts.replaceChildren();
 if(x.sampleUrl){const a=document.createElement("a");a.href=x.sampleUrl;a.target="_blank";a.rel="noopener noreferrer";a.textContent="Ver muestra gratuita";acts.append(a)}
 if(x.status==="available"&&x.purchaseUrl){const a=document.createElement("a");a.href=x.purchaseUrl;a.target="_blank";a.rel="noopener noreferrer";a.textContent="Comprar publicación";acts.append(a)}
 $("detailNote").textContent=x.note||"Publicación independiente de Editorial RUMA.";
 $("detail").showModal();
});
$("close").addEventListener("click",()=>$("detail").close());
$("detail").addEventListener("click",e=>{if(e.target===$("detail"))$("detail").close()});
$("menuToggle").addEventListener("click",()=>{const open=$("nav").classList.toggle("open");$("menuToggle").setAttribute("aria-expanded",String(open));$("menuToggle").setAttribute("aria-label",open?"Cerrar menú":"Abrir menú")});
$("nav").addEventListener("click",e=>{if(e.target.closest("a")){$("nav").classList.remove("open");$("menuToggle").setAttribute("aria-expanded","false");$("menuToggle").setAttribute("aria-label","Abrir menú")}});
$("year").textContent=new Date().getFullYear();drawFilters();render();
})();