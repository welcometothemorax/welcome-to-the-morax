const body = document.body;
const colors = ['#fff','#5ea6ff','#b28cff'];

Array.from({length:150}).forEach(() => {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.top = Math.random()*100+'%';
    s.style.left = Math.random()*100+'%';
    const size = Math.random()*3+1;
    s.style.width = s.style.height = size+'px';
    s.style.opacity = Math.random()*0.6+0.3;
    s.style.backgroundColor = colors[Math.floor(Math.random()*3)];
    s.style.animationDuration = (Math.random()*3+2)+'s';
    body.appendChild(s);
});
