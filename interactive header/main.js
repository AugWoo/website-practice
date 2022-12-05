const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

const handleToggle = () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
};

toggleBtn.addEventListener('click', handleToggle);
