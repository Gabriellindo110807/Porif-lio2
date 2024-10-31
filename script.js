document.querySelectorAll('#darkModeToggle').forEach(button => {
    button.onclick = function() {
        document.body.classList.toggle('dark-mode');
    };
});

function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.width = Math.random() * 100 + 'px';
    bubble.style.height = bubble.style.width;
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.setProperty('--left', bubble.style.left);
    document.querySelector('.bubble-container').appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 5000);
}

setInterval(createBubble, 1000);