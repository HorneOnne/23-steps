#!/usr/bin/env node
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { readFileSync } from 'fs';
import { createInterface } from 'readline';
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
    'mob_configs.json',
    'item_configs.json',
    'item_values.json',
    'crafting_recipes.json',
    'chestdata.json',
    'shopconfigs.json',
    'tile_properties.json',
    'tile_to_item_mapping.json'
];

function ask(question) {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    return new Promise(resolve => {
        rl.question(question, answer => { rl.close(); resolve(answer); });
    });
}

async function main() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    const email = await ask('Email: ');
    const password = await ask('Password: ');

    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Authenticated.\n');
    } catch (err) {
        console.error('Auth failed:', err.message);
        process.exit(1);
    }

    let success = 0;
    let failed = 0;

    for (const filename of FILES) {
        const docName = filename.replace('.json', '');
        const filePath = join(__dirname, filename);
        try {
            const raw = readFileSync(filePath, 'utf-8');
            const data = JSON.parse(raw);
            await setDoc(doc(db, 'configs', docName), { data });
            console.log('  OK: ' + docName);
            success++;
        } catch (err) {
            console.error('  FAIL: ' + docName + ' — ' + err.message);
            failed++;
        }
    }

    console.log('\nDone! ' + success + ' uploaded, ' + failed + ' failed.');
    process.exit(0);
}

main();
