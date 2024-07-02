function showAd() {
    alert("Посетите наш сайт для уникальных товаров и услуг!");
}

// Задаем интервал для появления рекламных окон (например, каждые 30 секунд)
setInterval(showAd, 300000);
document.getElementById("fixedButton").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});