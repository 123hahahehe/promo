const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Your bot token obtained from Replit Secrets
const TOKEN = process.env.TOKEN;

// List of keywords for channels where the bot will send messages
const targetChannelKeywords = ['gen', 'chat', 'general'];

// List of messages the bot can choose from
const messages = [
    "please please PLEASE follow party77 on soundcloud 🥺🥺🥺😭😭",
    "pretty please follow party77x on instagram",
    "may you pweasee follow party77 on soundcloud",
    "https://soundcloud.com/party77",
    "https://soundcloud.com/party77/i-know-prodcyberia i knowwwwwwwww"
];

client.once('ready', () => {
    console.log('Bot is ready!');
    // Start the interval for sending messages
    sendRandomMessage();
});

client.on('messageCreate', message => {
    // Ignore messages from the bot itself and messages not from the specified channels
    if (message.author.bot || !isTargetChannel(message.channel)) return;
});

function isTargetChannel(channel) {
    return targetChannelKeywords.some(keyword => channel.name.toLowerCase().includes(keyword));
}

function sendRandomMessage() {
    // Select a random message from the list
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Get the target channel
    const targetChannel = client.channels.cache.find(channel => isTargetChannel(channel));
    if (!targetChannel) return console.error('Target channel not found.');

    // Send the random message to the target channel
    targetChannel.send(randomMessage)
        .then(() => console.log(`Message sent in ${targetChannel.name}: ${randomMessage}`))
        .catch(error => console.error('Error sending message:', error));

    // Get a random delay between 30 to 60 minutes (1,800,000 to 3,600,000 milliseconds)
    const delay = Math.floor(Math.random() * (3600000 - 1800000 + 1)) + 1800000;
    
    // Set the timeout for the next message
    setTimeout(sendRandomMessage, delay);
}

client.login(TOKEN);
