/**
 * WikiData — shared data loader for Mine & Dungeon wiki.
 * Priority: localStorage admin overrides → Firestore → static JSON fallback.
 */
var WikiData = (function () {
    var STORAGE_PREFIX = 'wikiAdmin_';

    /**
     * Get Firestore database reference (if Firebase is loaded).
     */
    function getDb() {
        if (typeof FirebaseConfig !== 'undefined') {
            return FirebaseConfig.getDb();
        }
        return null;
    }

    /**
     * Load a JSON data file.
     * 1. Check localStorage for admin overrides
     * 2. Try Firestore
     * 3. Fall back to static JSON file
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
                console.warn('[WikiData] Bad localStorage for ' + filename + ', falling back.');
            }
        }

        var db = getDb();
        if (db) {
            var docName = filename.replace('.json', '');
            return db.collection('configs').doc(docName).get()
                .then(function (doc) {
                    if (doc.exists) {
                        return doc.data().data;
                    }
                    // Firestore doc not found, fall back to static JSON
                    return fetch(filename).then(function (r) { return r.json(); });
                })
                .catch(function (err) {
                    console.warn('[WikiData] Firestore error for ' + filename + ', falling back to file.', err);
                    return fetch(filename).then(function (r) { return r.json(); });
                });
        }

        return fetch(filename).then(function (r) { return r.json(); });
    }

    /**
     * Save JSON data to Firestore and localStorage.
     * @param {string} filename
     * @param {any} data
     * @returns {Promise<void>}
     */
    function save(filename, data) {
        var key = STORAGE_PREFIX + filename;
        localStorage.setItem(key, JSON.stringify(data));

        var db = getDb();
        if (db) {
            var docName = filename.replace('.json', '');
            return db.collection('configs').doc(docName).set({ data: data })
                .then(function () {
                    console.log('[WikiData] Saved ' + filename + ' to Firestore.');
                })
                .catch(function (err) {
                    console.warn('[WikiData] Firestore save failed for ' + filename, err);
                });
        }

        return Promise.resolve();
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
