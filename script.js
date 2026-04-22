document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('idea-card');
    const heading = document.getElementById('main-heading');

    // Add mouse move effect for depth
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    // Reset on mouse leave
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });

    // Click effect
    card.addEventListener('mousedown', () => {
        card.style.transform = `perspective(1000px) scale(0.98) translateY(2px)`;
    });

    card.addEventListener('mouseup', () => {
        card.style.transform = `perspective(1000px) scale(1) translateY(-5px)`;
    });
});
