/**
 * WikiData — shared data loader for Mine & Dungeon wiki.
 * Checks localStorage for admin overrides first, falls back to static JSON.
 */
var WikiData = (function () {
    var STORAGE_PREFIX = 'wikiAdmin_';

    /**
     * Load a JSON data file.
     * @param {string} filename - e.g. 'mob_configs.json'
     * @returns {Promise<any>} parsed JSON
     */
    function load(filename) {
        var key = STORAGE_PREFIX + filename;
        var stored = localStorage.getItem(key);
        if (stored) {
            try {
                return Promise.resolve(JSON.parse(stored));
            } catch (e) {
                console.warn('[WikiData] Bad localStorage for ' + filename + ', falling back to file.');
            }
        }
        return fetch(filename).then(function (r) { return r.json(); });
    }

    /**
     * Save JSON data to localStorage (admin use).
     * @param {string} filename
     * @param {any} data
     */
    function save(filename, data) {
        var key = STORAGE_PREFIX + filename;
        localStorage.setItem(key, JSON.stringify(data));
    }

    /**
     * Check if a file has local overrides.
     * @param {string} filename
     * @returns {boolean}
     */
    function hasOverride(filename) {
        return localStorage.getItem(STORAGE_PREFIX + filename) !== null;
    }

    /**
     * Remove local override for a file.
     * @param {string} filename
     */
    function clearOverride(filename) {
        localStorage.removeItem(STORAGE_PREFIX + filename);
    }

    /**
     * Remove all local overrides.
     */
    function clearAll() {
        var keys = [];
        for (var i = 0; i < localStorage.length; i++) {
            var k = localStorage.key(i);
            if (k && k.indexOf(STORAGE_PREFIX) === 0) keys.push(k);
        }
        keys.forEach(function (k) { localStorage.removeItem(k); });
    }

    /**
     * Get list of all overridden filenames.
     * @returns {string[]}
     */
    function getOverriddenFiles() {
        var files = [];
        for (var i = 0; i < localStorage.length; i++) {
            var k = localStorage.key(i);
            if (k && k.indexOf(STORAGE_PREFIX) === 0) {
                files.push(k.substring(STORAGE_PREFIX.length));
            }
        }
        return files;
    }

    return {
        load: load,
        save: save,
        hasOverride: hasOverride,
        clearOverride: clearOverride,
        clearAll: clearAll,
        getOverriddenFiles: getOverriddenFiles
    };
})();
