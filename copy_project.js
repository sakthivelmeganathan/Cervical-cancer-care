const fs = require('fs');
const path = require('path');

const srcDir = '.';
const destDir = '/tmp/cervical-cancer-build';

const ignored = [
    'node_modules',
    '.git',
    '.next',
    'temp_build',
    '.DS_Store',
    'copy_project.js'
];

function copyRecursive(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (ignored.includes(entry.name)) {
            continue;
        }

        // Skip hidden files that start with . except specific config files if needed
        // For now, copy all other files

        try {
            if (entry.isDirectory()) {
                copyRecursive(srcPath, destPath);
            } else {
                fs.copyFileSync(srcPath, destPath);
            }
        } catch (err) {
            console.error(`Failed to copy ${srcPath}: ${err.message}`);
            try {
                const content = fs.readFileSync(srcPath);
                fs.writeFileSync(destPath, content);
                console.log(`Fallback copy success for ${srcPath}`);
            } catch (readErr) {
                console.error(`Fallback failed for ${srcPath}: ${readErr.message}`);
            }
        }
    }
}

console.log('Starting copy...');
copyRecursive(srcDir, destDir);
console.log('Copy complete.');
