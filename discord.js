const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Your bot token obtained from Replit Secrets
const TOKEN = process.env.TOKEN;

// List of messages the bot can choose from
const messages = [
    "Hello!",
    "How are you?",
    "What's up?",
    "Greetings!",
    "Hey there!"
];

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('messageCreate', message => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    // Select a random message from the list
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Send the random message to the same channel where the original message was received
    message.channel.send(randomMessage)
        .then(() => console.log(`Message sent in ${message.channel.name}: ${randomMessage}`))
        .catch(error => console.error('Error sending message:', error));
});

client.login(TOKEN);
