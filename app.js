function toggleMenu() {
    const menu = document.querySelector(".pages")
    menu.classList.toggle("show")
}

  const carrossel = document.querySelector('.carrossel');
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  let currentIndex = 0;

  function updateCarrossel() {
    const offset = -currentIndex * 100;
    carrossel.style.transform = `translateX(${offset}%)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarrossel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarrossel();
  });


