document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content-section');
    const image = document.querySelector('.full-width-image img');
    
    if (content) {
        content.style.transition = "opacity 0.75s ease, transform 0.75s ease";
        content.style.opacity = 0;
        content.style.transform = "rotateX(-10deg)";
        
        setTimeout(() => {
            content.style.opacity = 1;
            content.style.transform = "rotateX(0)";
        }, 100);
    }
    
    if (image) {
        image.style.transition = "opacity 0.75s ease, transform 0.75s ease";
        image.style.opacity = 0;
        image.style.transform = "rotateX(-10deg)";
        
        setTimeout(() => {
            image.style.opacity = 1;
            image.style.transform = "rotateX(0)";
        }, 100);
    }
});

document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href.startsWith('#')) {
            return;
        }

        e.preventDefault();

        const content = document.querySelector('.content-section');
        const image = document.querySelector('.full-width-image img');
        
        if (content) {
            content.style.transition = "opacity 0.75s ease, transform 0.75s ease";
            content.style.opacity = 0;
            content.style.transform = "rotateX(-10deg)";
        }

        if (image) {
            image.style.transition = "opacity 0.75s ease, transform 0.75s ease";
            image.style.opacity = 0;
            image.style.transform = "rotateX(-10deg)";
        }

        setTimeout(() => {
            window.location.href = this.href;
        }, 750);
    });
});
