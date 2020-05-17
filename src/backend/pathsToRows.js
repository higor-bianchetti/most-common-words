// Agrupa todo o texto em apenas uma grande linha com as legendas

const fs = require('fs');

module.exports = (paths) => {
  return new Promise((resolver, reject) => {
    try {
      const rows = paths
        .map((path) => fs.readFileSync(path).toString('utf-8'))
        .reduce((fullText, fileText) => `${fullText}\n${fileText}`)
        .split('\n');

      resolver(rows);
    } catch (e) {
      reject(e);
    }
  });
};
