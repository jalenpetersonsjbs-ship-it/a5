document.addEventListener('DOMContentLoaded', () => {
  const drawerToggle = document.getElementById('drawer-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (drawerToggle && mobileDrawer) {
    drawerToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      drawerToggle.innerHTML = mobileDrawer.classList.contains('open') ? '&times;' : '&#9776;';
    });
  }
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (btn) {
      btn.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    }
  });
});
