// ── NAV SCROLL ────────────────────────────────────────────
function scrollToSection(id) {
  var el = document.getElementById(id);
  if (!el) return;
  var navH = document.querySelector('.nav').offsetHeight || 56;
  var top = el.getBoundingClientRect().top + window.pageYOffset - navH - 8;
  window.scrollTo({ top: top, behavior: 'smooth' });
}

// ── ACCORDION TOGGLE ──────────────────────────────────────
function tog(el) {
  var acc = el.closest('.acc');
  if (!acc) return;
  acc.classList.toggle('open');
}

// ── REQUIREMENTS FILTER ───────────────────────────────────
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

// ── NAV ACTIVE STATE ──────────────────────────────────────
window.addEventListener('scroll', function() {
  var sections = ['arbitrage','revenue','argument','framework','artifacts','resourcing','program','requirements'];
  var links = document.querySelectorAll('.nav-link');
  var current = '';
  var navH = document.querySelector('.nav').offsetHeight || 56;

  sections.forEach(function(id) {
    var el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top < navH + 40) {
      current = id;
    }
  });

  links.forEach(function(l) {
    var onclick = l.getAttribute('onclick') || '';
    l.classList.toggle('active', onclick.indexOf("'" + current + "'") > -1);
  });
});
