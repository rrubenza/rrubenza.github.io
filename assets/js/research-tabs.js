/* Research highlight categories.

   A disclosure/toggle group, not a tablist: nothing is open on load, clicking a
   category opens it, and clicking the open one closes it again.

   Also handles cross-links between entries. A link to #entry-<slug> opens
   whichever category owns that entry and scrolls to it, so an entry in a
   collapsed panel is still reachable.

   Progressive enhancement: without JS every panel is visible, so no content is
   trapped. Adding .is-js switches the CSS to open-one-at-a-time. */
(function () {
	'use strict';

	var root = document.querySelector('[data-research]');
	if (!root) return;

	var tabs   = Array.prototype.slice.call(root.querySelectorAll('[data-tab]'));
	var panels = Array.prototype.slice.call(root.querySelectorAll('[data-panel]'));
	if (!tabs.length || !panels.length) return;

	root.className += ' is-js';

	var open = null;

	function render() {
		tabs.forEach(function (tab) {
			var on = tab.getAttribute('data-tab') === open;
			tab.setAttribute('aria-expanded', on ? 'true' : 'false');
			tab.className = on ? 'research-tab is-active' : 'research-tab';
		});
		panels.forEach(function (panel) {
			var on = panel.getAttribute('data-panel') === open;
			panel.className = on ? 'research-panel is-active' : 'research-panel';
		});
	}

	function setHash(hash) {
		if (window.history && window.history.replaceState) {
			window.history.replaceState(null, '', hash);
		}
	}

	function setOpen(slug) {
		open = slug;
		render();
		setHash(slug ? '#research-' + slug : '#research');
	}

	/* Open the category containing #entry-<slug> and scroll to it. */
	function revealEntry(slug, scroll) {
		var el = document.getElementById('entry-' + slug);
		if (!el) return false;
		var category = el.getAttribute('data-entry-category');
		if (category && category !== open) {
			open = category;
			render();
		}
		if (scroll) {
			// Panel is visible as soon as the class is set; scroll on the next frame.
			window.requestAnimationFrame(function () {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			});
		}
		setHash('#entry-' + slug);
		return true;
	}

	tabs.forEach(function (tab) {
		tab.addEventListener('click', function () {
			var slug = tab.getAttribute('data-tab');
			setOpen(open === slug ? null : slug);   // clicking the open one closes it
		});
	});

	/* Cross-links: any <a href="#entry-..."> anywhere on the page. */
	document.addEventListener('click', function (e) {
		var a = e.target.closest ? e.target.closest('a[href^="#entry-"]') : null;
		if (!a) return;
		var slug = a.getAttribute('href').slice('#entry-'.length);
		if (revealEntry(slug, true)) e.preventDefault();
	});

	/* Deep links: #research-<category> or #entry-<slug>. */
	var hash = window.location.hash;
	var mCat   = /^#research-([\w-]+)$/.exec(hash);
	var mEntry = /^#entry-([\w-]+)$/.exec(hash);

	if (mEntry) {
		render();
		revealEntry(mEntry[1], true);
	} else {
		if (mCat && tabs.some(function (t) { return t.getAttribute('data-tab') === mCat[1]; })) {
			open = mCat[1];
		}
		render();
	}
}());
