// Nav for the SHRDLU site: hamburger panel (mobile) + click-to-open dropdown groups.
(function () {
  function init() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');
    if (!nav) return;

    function closeGroups() {
      var open = nav.querySelectorAll('.nav-menu.open');
      Array.prototype.forEach.call(open, function (m) { m.classList.remove('open'); });
      var btns = nav.querySelectorAll('.nav-top[aria-expanded="true"]');
      Array.prototype.forEach.call(btns, function (b) { b.setAttribute('aria-expanded', 'false'); });
    }
    function closeAll() {
      nav.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      closeGroups();
    }

    if (toggle) {
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (!open) closeGroups();
      });
    }

    var tops = nav.querySelectorAll('.nav-group > .nav-top');
    Array.prototype.forEach.call(tops, function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var menu = btn.parentNode.querySelector('.nav-menu');
        if (!menu) return;
        var willOpen = !menu.classList.contains('open');
        closeGroups();
        if (willOpen) { menu.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
      });
    });

    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && (!toggle || !toggle.contains(e.target))) closeAll();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAll();
    });
  }

  // Code deck: slide the hero source across the readings' codebases.
  function initDeck() {
    var deck = document.getElementById('codedeck');
    if (!deck) return;
    var track = deck.querySelector('.codedeck-track');
    var tabs = Array.prototype.slice.call(deck.querySelectorAll('.cd-tab'));
    var slides = deck.querySelectorAll('.codeslide');
    if (!track || !tabs.length) return;
    var n = slides.length, cur = 0, timer = null;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function go(i) {
      cur = (i + n) % n;
      track.style.transform = 'translateX(' + (-cur * 100) + '%)';
      tabs.forEach(function (t, j) {
        var on = j === cur;
        t.classList.toggle('is-on', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function start() { if (reduce) return; stop(); timer = setInterval(function () { go(cur + 1); }, 6500); }

    tabs.forEach(function (t) {
      t.addEventListener('click', function () { go(parseInt(t.getAttribute('data-i'), 10) || 0); start(); });
    });
    deck.addEventListener('mouseenter', stop);
    deck.addEventListener('mouseleave', start);
    deck.addEventListener('focusin', stop);
    deck.addEventListener('focusout', start);
    go(0); start();
  }

  function boot() { init(); initDeck(); }
  if (document.readyState !== 'loading') boot();
  else document.addEventListener('DOMContentLoaded', boot);
})();
