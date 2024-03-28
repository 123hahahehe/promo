const Discord = require('discord.js');
const config = require('./config.json');

// Your bot token obtained from Discord Developer Portal
const TOKEN = config.token;

// List of messages the bot can choose from
const messages = [
    "Hello!",
    "How are you?",
    "What's up?",
    "Greetings!",
    "Hey there!"
];

// Create a new Discord client
const client = new Discord.Client();

// Event: Bot is ready
client.once('ready', () => {
    console.log('Bot is ready!');
});

// Event: Message received
client.on('message', message => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    // Select a random message from the list
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Send the random message to the same channel where the original message was received
    message.channel.send(randomMessage)
        .then(() => console.log(`Message sent in ${message.channel.name}: ${randomMessage}`))
        .catch(error => console.error('Error sending message:', error));
});

// Log in to Discord with your app's token
client.login(TOKEN);
