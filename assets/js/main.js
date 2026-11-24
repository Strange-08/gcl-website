// Bar Council disclaimer — shown once per browser session
(function () {
  var box = document.getElementById('disclaimer');
  var agreed = false;
  try { agreed = sessionStorage.getItem('gc-agreed') === '1'; } catch (e) {}
  if (!agreed) { box.classList.add('show'); document.body.classList.add('locked'); }
  document.getElementById('agree').addEventListener('click', function () {
    try { sessionStorage.setItem('gc-agreed', '1'); } catch (e) {}
    box.classList.remove('show');
    document.body.classList.remove('locked');
  });
})();

// Mobile menu
var toggle = document.getElementById('navToggle');
var nav = document.getElementById('nav');
function setMenu(open) {
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
}
toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
nav.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () { setMenu(false); });
});
// close the menu if the screen is rotated / resized to desktop width
window.addEventListener('resize', function () { if (window.innerWidth > 880) setMenu(false); });

// Reveal on scroll
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
} else {
  document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
}

// Enquiry form -> WhatsApp (no server needed on static hosting)
document.getElementById('enquiry').addEventListener('submit', function (e) {
  e.preventDefault();
  var f = e.target.elements;
  var text = 'Enquiry from website%0A' +
    'Name: ' + encodeURIComponent(f.name.value) + '%0A' +
    'Phone: ' + encodeURIComponent(f.phone.value) + '%0A' +
    'Service: ' + encodeURIComponent(f.service.value) + '%0A' +
    'Message: ' + encodeURIComponent(f.message.value);
  window.open('https://wa.me/918428057507?text=' + text, '_blank', 'noopener');
});

document.getElementById('year').textContent = new Date().getFullYear();
