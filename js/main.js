const bgButton = document.getElementById('bg-menu');
bgButton.addEventListener('click', () => {
  bgButton.classList.toggle('open');
  const headerNav = document.getElementById('header-navigation');
  headerNav.classList.toggle('in');
});
