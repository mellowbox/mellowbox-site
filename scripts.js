
// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth'});
    }
  });
});

// Mobile menu
const hamburger = document.getElementById('hamburgerBtn');
const nav = document.getElementById('siteNav');
if(hamburger && nav){
  hamburger.addEventListener('click', ()=>{
    const visible = getComputedStyle(nav).display !== 'none';
    nav.style.display = visible ? 'none' : 'flex';
  });
}

// Section fade-in
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.12});
document.querySelectorAll('section, .product-card, .cat-tile').forEach(el=>{
  el.classList.add('pre-reveal');
  observer.observe(el);
});

// Filter buttons on store page
const grid = document.getElementById('storeGrid');
if(grid){
  const chips = document.querySelectorAll('.chip');
  chips.forEach(ch=>{
    ch.addEventListener('click', ()=>{
      chips.forEach(c=>c.classList.remove('active'));
      ch.classList.add('active');
      const filter = ch.dataset.filter;
      grid.querySelectorAll('.product-card').forEach(card=>{
        const cat = card.dataset.category;
        card.style.display = (filter==='all' || cat===filter) ? '' : 'none';
      });
    });
  });
}

// Razorpay placeholder handlers (replace with real Checkout later)
function openRazorpayPlaceholder(){
  alert('Connect your real Razorpay Buy Button or Checkout ID in product pages.');
}
['buyNowTop','buyNowBottom'].forEach(id=>{
  const btn = document.getElementById(id);
  if(btn){ btn.addEventListener('click', (e)=>{ e.preventDefault(); openRazorpayPlaceholder(); }); }
});

// Tiny animation CSS hook
const style = document.createElement('style');
style.textContent = `.pre-reveal{opacity:.001;transform:translateY(8px);transition:opacity .6s ease, transform .6s ease}
.reveal{opacity:1;transform:none}`;
document.head.appendChild(style);
