#!/usr/bin/env node
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const firebaseConfig = {
    apiKey: "AIzaSyAP78rbdHvDZg_Si3dYdigqFuunNUBKX3Q",
    authDomain: "steps-76b7f.firebaseapp.com",
    projectId: "steps-76b7f",
    storageBucket: "steps-76b7f.firebasestorage.app",
    messagingSenderId: "588520415388",
    appId: "1:588520415388:web:dd005c387006b91894cd59"
};

const FILES = [
    'mob_configs',
    'item_configs',
    'item_values',
    'crafting_recipes',
    'chestdata',
    'shopconfigs',
    'tile_properties',
    'tile_to_item_mapping'
];

async function main() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    console.log('Fetching from Firestore...\n');

    let success = 0;
    let failed = 0;

    for (const docName of FILES) {
        try {
            const snap = await getDoc(doc(db, 'configs', docName));
            if (!snap.exists()) {
                console.error('  SKIP: ' + docName + ' (not found in Firestore)');
                failed++;
                continue;
            }
            const data = snap.data().data;
            const filePath = join(__dirname, docName + '.json');
            writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
            console.log('  OK: ' + docName + '.json');
            success++;
        } catch (err) {
            console.error('  FAIL: ' + docName + ' — ' + err.message);
            failed++;
        }
    }

    console.log('\nDone! ' + success + ' downloaded, ' + failed + ' failed.');
    process.exit(0);
}

main();
