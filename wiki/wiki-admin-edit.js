/**
 * WikiAdminEdit — shared admin mode UI for wiki pages.
 * Shows a floating toolbar when admin is logged in.
 */
var WikiAdmin = (function () {
    var SESSION_KEY = 'wikiAdmin_session';

    function isAdmin() {
        return sessionStorage.getItem(SESSION_KEY) === '1';
    }

    function init() {
        if (!isAdmin()) return;
        injectToolbar();
        document.body.classList.add('wiki-admin-active');
    }

    function injectToolbar() {
        var bar = document.createElement('div');
        bar.id = 'wiki-admin-bar';
        bar.innerHTML = [
            '<span class="wab-badge">✏️ Admin Mode</span>',
            '<a class="wab-link" href="admin.html">Open Editor</a>',
            '<button class="wab-btn" onclick="WikiAdmin.logout()">Logout</button>'
        ].join('');
        document.body.appendChild(bar);

        var style = document.createElement('style');
        style.textContent = [
            '#wiki-admin-bar{position:fixed;bottom:0;left:0;right:0;z-index:9999;',
            'display:flex;align-items:center;gap:12px;padding:8px 20px;',
            'background:rgba(30,30,30,.92);backdrop-filter:blur(8px);',
            'border-top:2px solid #e67e22;font-size:.82rem;color:#fff;font-family:Inter,sans-serif}',
            '.wab-badge{font-weight:700;color:#e67e22}',
            '.wab-link{color:#60a5fa;text-decoration:none;font-weight:600}',
            '.wab-link:hover{text-decoration:underline}',
            '.wab-btn{background:none;border:1px solid #888;color:#ccc;padding:4px 12px;',
            'border-radius:4px;cursor:pointer;font-size:.78rem;font-family:inherit}',
            '.wab-btn:hover{border-color:#e67e22;color:#e67e22}',
            /* editable cell styles */
            '.wiki-admin-active [data-editable]{cursor:pointer;position:relative;',
            'transition:background .15s,outline .15s}',
            '.wiki-admin-active [data-editable]:hover{background:rgba(230,126,34,.1);',
            'outline:1px dashed rgba(230,126,34,.4);outline-offset:-1px}',
            '.wiki-admin-active [data-editable].editing{padding:0!important}',
            '.admin-cell-input{width:100%;padding:6px 8px;border:2px solid #e67e22;',
            'border-radius:4px;background:var(--wiki-section-card-bg,#fff);',
            'color:var(--wiki-text,#222);font-size:inherit;font-family:inherit;',
            'text-align:center;box-sizing:border-box}',
            '.admin-cell-input:focus{outline:none;border-color:#fb923c}',
            '#wiki-admin-bar .wab-save{margin-left:auto;background:#e67e22;color:#fff;',
            'border:none;padding:6px 16px;border-radius:4px;font-weight:600;',
            'cursor:pointer;font-size:.8rem;font-family:inherit;display:none}',
            '#wiki-admin-bar .wab-save:hover{background:#d35400}',
            '#wiki-admin-bar .wab-save.has-changes{display:inline-block}'
        ].join('\n');
        document.head.appendChild(style);
    }

    function logout() {
        sessionStorage.removeItem(SESSION_KEY);
        var bar = document.getElementById('wiki-admin-bar');
        if (bar) bar.remove();
        document.body.classList.remove('wiki-admin-active');
    }

    /* ── Inline cell editing helpers ─────────────────────────── */

    /**
     * Make a cell editable. Call from page-specific code.
     * @param {HTMLElement} cell - the td element
     * @param {object} opts - { onSave: function(newValue) }
     */
    function makeEditable(cell, opts) {
        if (!isAdmin()) return;
        cell.setAttribute('data-editable', '1');
        cell.addEventListener('click', function (e) {
            if (cell.classList.contains('editing')) return;
            e.stopPropagation();
            e.preventDefault();
            startEdit(cell, opts);
        });
    }

    function startEdit(cell, opts) {
        var text = cell.textContent.trim();
        // Detect suffix: /s, x, or none
        var suffix = '';
        var prefix = '';
        if (text.endsWith('/s')) { suffix = '/s'; text = text.slice(0, -2); }
        else if (text.endsWith('x')) { suffix = 'x'; text = text.slice(0, -1); }
        if (text.startsWith('+')) { prefix = '+'; text = text.slice(1); }
        var original = text.trim();
        cell.classList.add('editing');
        var input = document.createElement('input');
        input.className = 'admin-cell-input';
        input.type = 'text';
        input.value = original;
        cell.textContent = '';
        cell.appendChild(input);
        input.focus();
        input.select();

        function finish() {
            var newVal = input.value.trim();
            cell.classList.remove('editing');
            if (newVal === '' || newVal === original) {
                cell.textContent = prefix + original + suffix;
                return;
            }
            // Try numeric
            var num = Number(newVal);
            var finalVal = isNaN(num) ? newVal : num;
            cell.textContent = prefix + (isNaN(num) ? newVal : fmt(num)) + suffix;
            if (opts && opts.onSave) opts.onSave(finalVal);
        }

        function fmt(v) { return v % 1 === 0 ? v : parseFloat(v.toFixed(2)); }

        input.addEventListener('blur', finish);
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') { input.blur(); }
            if (e.key === 'Escape') { input.value = original; input.blur(); }
        });
    }

    // Auto-init on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    return {
        isAdmin: isAdmin,
        makeEditable: makeEditable,
        logout: logout
    };
})();
