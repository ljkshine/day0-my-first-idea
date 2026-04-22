document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Logic
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const siteNav = document.querySelector('.site-nav');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        siteNav.classList.toggle('active');
    });

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
    // Quotes logic
    const quotes = [
        "오늘도 힘내세요!",
        "가장 빛나는 별은 아직 발견되지 않은 당신입니다.",
        "작은 변화가 일어날 때 진정한 삶을 살게 된다.",
        "아무것도 하지 않으면 아무 일도 일어나지 않는다.",
        "시작이 반이다, 오늘 당신의 시작을 응원합니다."
    ];
    // Predefined beautiful color palettes
    const palettes = [
        { // Blue (Default)
            btnBg: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
            btnShadow: 'rgba(52, 152, 219, 0.3)',
            btnShadowHover: 'rgba(52, 152, 219, 0.4)',
            textBg: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
            textShadow: 'rgba(52, 152, 219, 0.2)'
        },
        { // Purple
            btnBg: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)',
            btnShadow: 'rgba(155, 89, 182, 0.3)',
            btnShadowHover: 'rgba(155, 89, 182, 0.4)',
            textBg: 'linear-gradient(135deg, #2c3e50 0%, #9b59b6 100%)',
            textShadow: 'rgba(155, 89, 182, 0.2)'
        },
        { // Green
            btnBg: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
            btnShadow: 'rgba(46, 204, 113, 0.3)',
            btnShadowHover: 'rgba(46, 204, 113, 0.4)',
            textBg: 'linear-gradient(135deg, #2c3e50 0%, #2ecc71 100%)',
            textShadow: 'rgba(46, 204, 113, 0.2)'
        },
        { // Red
            btnBg: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
            btnShadow: 'rgba(231, 76, 60, 0.3)',
            btnShadowHover: 'rgba(231, 76, 60, 0.4)',
            textBg: 'linear-gradient(135deg, #2c3e50 0%, #e74c3c 100%)',
            textShadow: 'rgba(231, 76, 60, 0.2)'
        },
        { // Yellow/Orange
            btnBg: 'linear-gradient(135deg, #f1c40f 0%, #f39c12 100%)',
            btnShadow: 'rgba(241, 196, 15, 0.3)',
            btnShadowHover: 'rgba(241, 196, 15, 0.4)',
            textBg: 'linear-gradient(135deg, #2c3e50 0%, #f1c40f 100%)',
            textShadow: 'rgba(241, 196, 15, 0.2)'
        },
        { // Teal
            btnBg: 'linear-gradient(135deg, #1abc9c 0%, #16a085 100%)',
            btnShadow: 'rgba(26, 188, 156, 0.3)',
            btnShadowHover: 'rgba(26, 188, 156, 0.4)',
            textBg: 'linear-gradient(135deg, #2c3e50 0%, #1abc9c 100%)',
            textShadow: 'rgba(26, 188, 156, 0.2)'
        },
        { // Pink
            btnBg: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
            btnShadow: 'rgba(253, 121, 168, 0.3)',
            btnShadowHover: 'rgba(253, 121, 168, 0.4)',
            textBg: 'linear-gradient(135deg, #2d3436 0%, #fd79a8 100%)',
            textShadow: 'rgba(253, 121, 168, 0.2)'
        }
    ];

    let currentQuoteIndex = 0;
    let currentPaletteIndex = 0;
    const nextBtn = document.getElementById('next-btn');

    nextBtn.addEventListener('click', (e) => {
        // Prevent event from bubbling up to the card's mousedown/mouseup
        e.stopPropagation();

        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        currentPaletteIndex = (currentPaletteIndex + 1) % palettes.length;

        const palette = palettes[currentPaletteIndex];

        // Update CSS variables for beautiful color transitions
        document.documentElement.style.setProperty('--btn-bg', palette.btnBg);
        document.documentElement.style.setProperty('--btn-shadow', palette.btnShadow);
        document.documentElement.style.setProperty('--btn-shadow-hover', palette.btnShadowHover);
        document.documentElement.style.setProperty('--text-bg', palette.textBg);
        document.documentElement.style.setProperty('--text-shadow', palette.textShadow);

        // Add fade out effect
        heading.classList.add('fade-out');

        setTimeout(() => {
            heading.textContent = quotes[currentQuoteIndex];
            // Remove fade out effect to fade back in
            heading.classList.remove('fade-out');
        }, 400); // Wait for CSS transition to complete
    });
});
