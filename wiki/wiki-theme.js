/* ═══════════════════════════════════════════════════════════════════════
   wiki-theme.js — Theme switcher for 23-Steps Wiki
   Persists via localStorage. Falls back to system preference.
   ═══════════════════════════════════════════════════════════════════════ */

(function () {
    'use strict';

    const STORAGE_KEY = 'wiki-theme';

    /** Read stored or system preference, default to 'dark'. */
    function getPreferred() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'light' || stored === 'dark') return stored;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
        return 'dark';
    }

    /** Apply theme without transition on initial load. */
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    // Apply immediately (before DOMContentLoaded) to avoid flash
    applyTheme(getPreferred());

    /** Toggle between light ↔ dark. */
    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEY, next);

        // Smooth transition
        document.documentElement.style.transition = 'background-color 0.3s, color 0.3s';
        applyTheme(next);
        setTimeout(() => {
            document.documentElement.style.transition = '';
        }, 350);
    }

    // Expose globally for inline onclick or external use
    window.toggleWikiTheme = toggleTheme;

    // Also bind to any .theme-toggle buttons once the DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.theme-toggle').forEach(btn => {
            btn.addEventListener('click', toggleTheme);
        });
    });
})();
