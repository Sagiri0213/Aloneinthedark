const { execSync } = require('child_process');

execSync('npx tailwindcss --version', { stdio: 'inherit' });
execSync('npx tailwindcss init -p', { stdio: 'inherit' });
