const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Your bot token obtained from Replit Secrets
const TOKEN = process.env.TOKEN;

// List of messages the bot can choose from
const messages = [
    "please please PLEASE follow party77 on soundcloud 🥺🥺🥺😭😭",
    "pretty please follow party77x on instagram",
    "may you pweasee follow party77 on soundcloud",
    "https://soundcloud.com/party77",
    "https://soundcloud.com/party77/i-know-prodcyberia i knowwwwwwwww",
    "my speakers are sending distress signals, and the only sos they understand is spelled P-A-R-T-Y-77-X!",
    "i'll trade you my last slice of pizza for just one song of party77x. that's a deal sweeter than nutella on pancakes",
    "i'm not begging, but my knees might buckle in desperation if i don't get my party77 song soon. help a friend stay upright!",
    "even my grandma's giving me side-eye for not tuning in to party77x. trust me, the guilt trip is real!",
    "my headphones are staging a protest until i give in and play party77x. the revolt is real, and it's getting noisy",
    "i'm not saying party77x is my lifeline, but let's just say without it, my existence resembles a sad trombone solo.",
    "if you don't let me listen to party77, my ears might go on strike and refuse to hear anything else. please, spare me from mute rebellion",
    "listen, my spotify playlist is feeling lonely without party77x. it's practically crying out for some dance floor action",
    "hey, i promise i'll be more loyal to party77x than a dog to its favorite chew toy. please, just let me hit play",
    "party please save us😭😭🥺",
    "pawtyyy",
    "https://soundcloud.com/party77/i-feel-dead-w-ksuuvi-prod-ksuuvi",
    "i knowwwwwwww",
    "partypie",
    "bleh",
    "i cant take this anymore party please rescue me party please please please",
    "𝓱𝓮𝓵𝓵𝓸 𝓷𝓲𝓰𝓰𝓪",
    "i miss u party",
    "<@1005654938245926962> please come bacl",
    "<@1005654938245926962> <@1005654938245926962> <@1005654938245926962> DODGE?",
    "<@1005654938245926962> get on valorant NIGGA!!!",
    "<@1005654938245926962> just made the #1 song in the world titled i feel so alone and its prod sxzu if you didnt know",
    "free deftones type beat said party",
    "https://soundcloud.com/party77 aaaaaaaaaa",
    "https://www.instagram.com/party77x ?",
    "www.chess.com/member/party77x vs me on chess ||nigga|| ",
    "https://soundcloud.com/party77/fell-in-love-prod-astral-4vr",
    "https://soundcloud.com/party77/666xxtep",
    "https://soundcloud.com/party77/lost-and-found-ft-dingotop-prod-cloudbxy",
    "https://soundcloud.com/party77/you-look-so-pretty-when-you-cry-pt-2-prod-payme10k",
    "https://soundcloud.com/party77/used-2-love-u-d",
    "something about femboys in maid dresses",
    "I MISS YOU MALLORY 😭🤓",
    "she told me she had a rapper in her dms whole time it was just <@767962949243240458> LOL",
    "<@767962949243240458> please save us 😂😂",
    "W DODGE",
    "hii nigga"
];

client.once('ready', () => {
    console.log('Bot is ready!');
    // Start the interval for sending messages
    sendRandomMessage();
});

client.on('messageCreate', () => {
    // Reset the interval whenever a message is received
    resetInterval();
});

function sendRandomMessage() {
    // Select a random message from the list
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    // Get a random delay between 5 to 15 minutes (300,000 to 900,000 milliseconds)
    const delay = Math.floor(Math.random() * (900000 - 300000 + 1)) + 300000; 

    // Send the random message to a random channel
    const channel = client.channels.cache.filter(c => c.type === 'GUILD_TEXT').random();
    if (channel) {
        channel.send(randomMessage)
            .then(() => console.log(`Message sent in ${channel.name}: ${randomMessage}`))
            .catch(error => console.error('Error sending message:', error));
    }

    // Set the timeout for the next message
    setTimeout(sendRandomMessage, delay);
}

function resetInterval() {
    // Clear the current timeout and reset it to a new interval
    clearTimeout(sendRandomMessage);
    sendRandomMessage();
}

client.login(TOKEN);
