/**
 * Firebase configuration and initialization for Mine & Dungeon Wiki.
 * Uses Firebase compat CDN (loaded via script tags in HTML).
 */
var FirebaseConfig = (function () {
    var config = {
        apiKey: "AIzaSyAP78rbdHvDZg_Si3dYdigqFuunNUBKX3Q",
        authDomain: "steps-76b7f.firebaseapp.com",
        projectId: "steps-76b7f",
        storageBucket: "steps-76b7f.firebasestorage.app",
        messagingSenderId: "588520415388",
        appId: "1:588520415388:web:dd005c387006b91894cd59",
        measurementId: "G-9XJ8P3NF39"
    };

    var app = null;
    var db = null;

    function init() {
        if (app) return;
        app = firebase.initializeApp(config);
        db = firebase.firestore();
    }

    function getDb() {
        if (!db) init();
        return db;
    }

    function getApp() {
        if (!app) init();
        return app;
    }

    return {
        init: init,
        getDb: getDb,
        getApp: getApp
    };
})();
