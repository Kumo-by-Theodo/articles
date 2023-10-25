const { exec } = require('child_process');
const { config } = require('dotenv');
const { readFileSync, writeFileSync, rmSync } = require('fs');

config();

const token = process.env.DEV_TO_GIT_TOKEN;

if (!token) {
  console.error('No token found');
  process.exit(1);
}

// read dev-to-git.json
const devToGit = JSON.parse(readFileSync('./dev-to-git.json'));

const main = index => {
  const article = devToGit[index];

  if (article === undefined) {
    // delete temp file
    rmSync('./dev-to-git-temp.json');

    return;
  }

  writeFileSync('./dev-to-git-temp.json', JSON.stringify([article], null, 2));

  exec(`DEV_TO_GIT_TOKEN=${token} yarn run dev-to-git --config ./dev-to-git-temp.json`, (_, stdout) => {
    console.log(stdout);
    setTimeout(() => {
      main(index + 1);
    }, 3500); // quota is 10 calls every 30 seconds
  });
};

main(0);
