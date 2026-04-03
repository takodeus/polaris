function scrollToSection(id) {
  var el = document.getElementById(id);
  if (!el) return;
  var sidebar = document.querySelector('.sidebar');
  var offset = (window.innerWidth <= 900 && sidebar) ? sidebar.offsetHeight + 8 : 8;
  var top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: top, behavior: 'smooth' });
}

function tog(el) {
  var acc = el.closest('.acc');
  if (!acc) return;
  acc.classList.toggle('open');
}

function filterReqs(type, btn) {
  document.querySelectorAll('.req-filter-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');
  document.querySelectorAll('#req-tbody tr').forEach(function(row) {
    var show = type === 'all' || row.dataset.type === type;
    row.style.display = show ? 'table-row' : 'none';
  });
}

window.addEventListener('scroll', function() {
  var sections = ['arbitrage','revenue','argument','framework','artifacts','resourcing','program','requirements'];
  var items = document.querySelectorAll('.nav-item');
  var sidebar = document.querySelector('.sidebar');
  var offset = (window.innerWidth <= 900 && sidebar) ? sidebar.offsetHeight + 40 : 40;
  var current = '';

  sections.forEach(function(id) {
    var el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top < offset) current = id;
  });

  items.forEach(function(item) {
    var onclick = item.getAttribute('onclick') || '';
    item.classList.toggle('active', current !== '' && onclick.indexOf("'" + current + "'") > -1);
  });
});
