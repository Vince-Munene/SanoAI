// toggle script
document.getElementById('youBtn').addEventListener('click', () => {
  document.getElementById('youContent').classList.add('active');
  document.getElementById('proContent').classList.remove('active');
  document.getElementById('youBtn').classList.add('active');
  document.getElementById('proBtn').classList.remove('active');
});

document.getElementById('proBtn').addEventListener('click', () => {
  document.getElementById('proContent').classList.add('active');
  document.getElementById('youContent').classList.remove('active');
  document.getElementById('proBtn').classList.add('active');
  document.getElementById('youBtn').classList.remove('active');
});

// FAQ Accordion script
document.querySelectorAll('.accordion-btn').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('active');
  });
});

// Back to Top Button script
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

