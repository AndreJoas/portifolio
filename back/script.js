document.addEventListener("DOMContentLoaded", () => {
    const slideshows = document.querySelectorAll(".slideshow");
    
    slideshows.forEach(slideshow => {
        const slides = slideshow.querySelectorAll(".slide");
        let index = 0;

        setInterval(() => {
            slides[index].classList.remove("active");
            index = (index + 1) % slides.length; // Vai para o próximo slide
            slides[index].classList.add("active");
        }, 3000    ); // Alterna as imagens a cada 3 segundos
    });
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const slideshows = entry.target.querySelectorAll(".slideshow");
            slideshows.forEach(slideshow => {
                const slides = slideshow.querySelectorAll(".slide");
                let index = 0;

                setInterval(() => {
                    slides[index].classList.remove("active");
                    index = (index + 1) % slides.length; 
                    slides[index].classList.add("active");
                },      3000);
            });
        }
    });
}, { threshold: 0.5 }); // Ativa quando 50% da seção "Projects" está visível

const projectsSection = document.querySelector("#projects");
observer.observe(projectsSection);


