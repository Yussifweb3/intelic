document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.slider .slides');

    carousels.forEach((carousel) => {
        let currentImageIndex = 0;
        const images = carousel.querySelectorAll('img');

        if (images.length > 0) {
            images[0].classList.add('active');
            
            setInterval(() => {
                images[currentImageIndex].classList.remove('active');
                currentImageIndex = (currentImageIndex + 1) % images.length;
                images[currentImageIndex].classList.add('active');
            }, 3000);
        }
    });
});


window.addEventListener('scroll', function () {
    const header = this.document.getElementById('SHIFT1');
    if(window.scrollY >100)
        {
            header.classList.add('scrolled');
        }
        else {
            header.classList.remove('scrolled')
        }
})