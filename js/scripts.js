// Cursor
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = -100, my = -100, rx = -100, ry = -100;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function animCursor() {
cursor.style.left = mx + 'px';
cursor.style.top  = my + 'px';
rx += (mx - rx) * .12;
ry += (my - ry) * .12;
ring.style.left = rx + 'px';
ring.style.top  = ry + 'px';
requestAnimationFrame(animCursor);
})();
document.querySelectorAll('a, button, .feature-card, .industry-cell, .pill, .project-card, input, textarea, select').forEach(el => {
el.addEventListener('mouseenter', () => {
    cursor.style.width = '18px'; cursor.style.height = '18px';
    ring.style.width = '52px';  ring.style.height = '52px';
});
el.addEventListener('mouseleave', () => {
    cursor.style.width = '10px'; cursor.style.height = '10px';
    ring.style.width = '36px';  ring.style.height = '36px';
});
});

// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Floating dots
const dotField = document.getElementById('dotField');
for (let i = 0; i < 28; i++) {
const d = document.createElement('div');
d.className = 'dot';
d.style.cssText = `
    left: ${Math.random()*100}%;
    top: ${20 + Math.random()*70}%;
    --dur: ${7 + Math.random()*8}s;
    --delay: ${Math.random()*10}s;
    --op: ${.15 + Math.random()*.4};
    width: ${1.5 + Math.random()*3}px;
    height: ${1.5 + Math.random()*3}px;
`;
dotField.appendChild(d);
}

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));