// Remove linhas desnecessárias dos arquivos

module.exports = (rows) => {
  return new Promise((resolver, reject) => {
    try {
      const words = rows
        .filter(filterValidRows)
        .map(removePunctuation)
        .map(removeTags)
        .reduce(mergeRows)
        .split(' ')
        .map((word) => word.toLowerCase())
        .map((word) => word.replace('"', ''));

      resolver(words);
    } catch (e) {
      reject(e);
    }
  });
};

function filterValidRows(row) {
  const notNumber = !parseInt(row.trim()); // linhas só com números
  const notEmpty = !!row.trim(); // linhas vazias
  const notInterval = !row.includes('-->'); // linhas com o intervalo de tempo para exibição

  return notNumber && notEmpty && notInterval;
}

// const removePunctuation = (row) => row.replace(/[^A-Za-z]/g, '');
const removePunctuation = (row) => row.replace(/[,?!.-]/g, '');

const removeTags = (row) => row.replace(/(<[^>]+)>/gi, '').trim();

const mergeRows = (fullText, row) => `${fullText} ${row}`;
