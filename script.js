;(function(){
  var h = 'dmpmuniz.github.io';
  if (location.hostname !== h && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
    console.log('%c⚠ Site não autorizado', 'font-size:1.2rem;color:#C44D38;font-weight:bold');
    console.log('Este site foi criado por Daniel Muniz — https://github.com/dmpmuniz');
  }
})();

document.addEventListener('DOMContentLoaded', function(){
  console.log('%cDe Lucca Arquitetura | Construção', 'font-size:1.5rem;color:#8C1D24;font-weight:bold');
  console.log('%cCriado por Daniel Muniz — https://github.com/dmpmuniz', 'font-size:0.9rem;color:#C44D38');
  console.log('%cProva de conceito — produto não final, sujeito a aprovação do cliente.', 'font-size:0.8rem;color:#888');

  document.addEventListener('contextmenu', function(e){
    e.preventDefault();
    console.log('%c⚠ Cópia do código não autorizada. Este site é uma prova de conceito de Daniel Muniz.', 'color:#C44D38');
  });

  var header = document.querySelector('.header');
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function(){
      nav.classList.toggle('open');
    });

    document.querySelectorAll('.nav a').forEach(function(link){
      link.addEventListener('click', function(){
        nav.classList.remove('open');
      });
    });
  }

  if (header) {
    window.addEventListener('scroll', function(){
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function(link){
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});
