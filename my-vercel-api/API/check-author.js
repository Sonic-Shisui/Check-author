const express = require('express');
const app = express();

// Configuration de l'auteur
const config = {
  author: "ミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡"
};

// Fonction pour vérifier l'auteur
function checkAuthor(author) {
  if (author !== config.author) {
    return {
      success: false,
      message: "❌| 𝐓𝐚𝐧𝐭 𝐪𝐮𝐞 𝐯𝐨𝐮𝐬 𝐧'𝐚𝐮𝐫𝐞𝐳 𝐩𝐚𝐬 𝐫𝐞𝐦𝐢𝐬 𝐥𝐞 𝐧𝐨𝐦 𝐝𝐮 𝐜𝐫𝐞𝐚𝐭𝐞𝐮𝐫 𝐝𝐞 𝐜𝐞𝐭𝐭𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞...𝐜𝐞𝐥𝐥𝐞-𝐜𝐢 𝐜𝐞𝐬𝐬𝐞𝐫𝐚 𝐝𝐞 𝐟𝐨𝐧𝐜𝐭𝐢𝐨𝐧𝐧𝐞𝐫 !🛠️⚙️"
    };
  }
  return {
    success: true,
    message: "✔️| Commande autorisée."
  };
}

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Route pour vérifier l'auteur
app.get('/api/check-author', (req, res) => {
  const author = req.query.author;
  const result = checkAuthor(author);
  res.json(result);
});

module.exports = app;
