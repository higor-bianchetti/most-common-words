// Agrupa as palavras

module.exports = (words) => {
  return new Promise((resolver, reject) => {
    try {
      const groupedWords = words.reduce((obj, word) => {
        if (obj[word]) {
          obj[word]++;
        } else {
          obj[word] = 1;
        }

        return obj;
      }, {});

      const wordsArray = Object.keys(groupedWords)
        .map((key) => ({
          name: key,
          amount: groupedWords[key],
        }))
        .sort((word1, word2) => word2.amount - word1.amount);

      resolver(wordsArray);
    } catch (e) {
      reject(e);
    }
  });
};
