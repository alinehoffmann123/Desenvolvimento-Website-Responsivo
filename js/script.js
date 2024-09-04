document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
  });
});


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registrado com sucesso: ', registration.scope);
      })
      .catch(error => {
        console.log('Falha ao registrar o ServiceWorker: ', error);
      });
  });
}
