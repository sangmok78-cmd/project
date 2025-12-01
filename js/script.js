document.addEventListener('DOMContentLoaded', function () {
    const topBtn = document.querySelector('.top');
    if (!topBtn) return;

    const SHOW_SCROLL_Y = 200;
    let ticking = false;

    function handleScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            if (window.scrollY > SHOW_SCROLL_Y) topBtn.classList.add('show');
            else topBtn.classList.remove('show');
            ticking = false;
        });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    topBtn.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToTop();
    });

    topBtn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToTop();
        }
    });

    // 초기 체크 (페이지 로드시 바로 보일지 여부)
    handleScroll();
});