```
const { Client, MessageMedia } = require('whatsapp-web.js');
const fs = require('fs');

// Configuration
const phoneNumber = process.env.PHONE_NUMBER; // +2250501889640
const groupId = process.env.GROUP_ID; // ID du groupe
const token = process.env.TOKEN; // Token WhatsApp Web

// Création du client
const client = new Client();

// Connexion
client.initialize({
  qrTimeoutMs: 0,
  restartOnCrash: true,
  puppeteer: {
    headless: true,
    args: ['--no-sandbox'],
  },
});

// Fonction pour kicker tous les membres
async function kickAll() {
  const group = await client.getGroup(groupId);
  const members = await group.getMembers();

  members.forEach(member => {
    group.removeMember((link unavailable));
  });
}

// Commande pour lancer la fonction kickAll
client.on('message', message => {
  if (message.body === '/kickall') {
    kickAll();
  }
});

// Gestion des erreurs
client.on('error', error => {
  console.error(error);
});

// Lancement du bot
client.on('ready', () => {
  console.log('Bot prêt !');
});
```
