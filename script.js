const gambar = document.getElementById("logoOsis2");
const stopObj = document.getElementById("boxJudul");
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const stopY = stopObj.getBoundingClientRect().top + window.scrollY;

    const maxTop = stopY - gambar.offsetHeight - 20; // 20px jarak aman

    // Ubah posisi gambar, tapi jangan lewat dari maxTop
    gambar.style.top = `${Math.min(scrollY + 100, maxTop)}px`;
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("ukuranNormal");
        }
    });
});
const targets = [
    document.getElementById("judul"),
    document.getElementById("penjelasanOsis"),
    document.getElementById("carousel-container"),
    document.getElementById("bg3Box4"),
    document.getElementById("bg3Box5"),
    document.getElementById("bg3Box41"),
    document.getElementById("bg3Box51"),
];
targets.forEach(el => observer.observe(el));

const carousel = document.getElementById("carouselImages");
const totalSlides = carousel.children.length;
let currentSlide = 0;
function updateSlide() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
}
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
}
setInterval(nextSlide, 5000);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {
    const targetId = this.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
    e.preventDefault(); // Hindari scroll default dan hash
    targetEl.scrollIntoView({ behavior: "smooth" });

    // Opsional: hapus hash dari URL
    history.replaceState(null, null, " ");
    }
});
});

function updateSectionHeight() {
    const box = document.querySelector('.bg3Box1');
    const section = document.querySelector('#bg3');

    if (box && section) {
      const tinggiBox = box.offsetHeight;
      const tinggiFinal = tinggiBox * 1.2;  //➕ 20%
      section.style.height = `${tinggiFinal}px`;
    }
}

window.addEventListener('load', updateSectionHeight);
window.addEventListener('resize', updateSectionHeight);

