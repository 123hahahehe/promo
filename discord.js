const Discord = require('discord.js');

const TOKEN = process.env.TOKEN;

// msg
const messages = [
    "Hello!",
    "How are you?",
    "What's up?",
    "Greetings!",
    "Hey there!"
];

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', message => {
    // Ignore messages from itself
    if (message.author.bot) return;

    // random
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    //channel
    message.channel.send(randomMessage)
        .then(() => console.log(`Message sent in ${message.channel.name}: ${randomMessage}`))
        .catch(error => console.error('Error sending message:', error));
});

// token
client.login(TOKEN);
