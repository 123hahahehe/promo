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
    "hii nigga",
    "hacked by party uncle",
    "i miss my cart",
    "where do i cop fent in florida",
    "https://soundcloud.com/zombie-party77 i- is t-this party?",
    "fuh nigga",
    "https://soundcloud.com/party77/catch-em-lacking-prodnyli how do i make song like this",
    "https://soundcloud.com/party77/i-cant-take-it-anymore-prod-evo-1 damn this is hard as FUCK! bro",
    "prod cloudbxy im so unemployed https://soundcloud.com/party77/lost-and-found-ft-dingotop-prod-cloudbxy",
    "i feel so unemployed prod sxzu",
    "i feel so broke prod sxzu youtube deftones",
    "youtube deftones type beat said party77",
    "p pawtyy",
    "https://c.tenor.com/WrWTuGupf9MAAAAd/tenor.gif",
    "i love anime girls and random pinterest women",
    "I LOVE ANIME",
    "I LOVE SETTING E-GIRLS AS MY PROFILE PICTURE",
    "im so barefoot rn",
    "https://c.tenor.com/4k0wJI-wPScAAAAd/tenor.gif",
    "i love discord",
    "save us discord",
    "i know you are but what am i",
    "how am i the bitch nigga",
    "https://c.tenor.com/SLBh2X8hSwkAAAAC/tenor.gif",
    "<@338824852272054272> val?",
    "padmas temu",
    "i love shein i love temu",
    "temu please save us",
    "projection",
    "i miss you party",
    "https://209.97.160.221/",
    "https://www.amazon.com/Taylors-Beard-Balm-Sandalwood-2oz/dp/B0CK5WY8C4/",
    "taylors butt balm",
    "TAYLOR PLEASE SAVE US",
    "taylors balm",
    "i love beard balm",
    "<@767962949243240458> fuck you 🖕",
    "i can spot a fuck nigga from a mile away <@533812803815866369> ",
    "betito please",
    "https://soundcloud.com/party77/likes i stalk party for inspo",
    "$20 PARTY77 REPOSTS https://soundcloud.com/party77/reposts",
    "https://soundcloud.com/party77/reflection-prodmadaphet 'uppin up my dosage cus i need something more potent' said mr cart",
    "cart god",
    "https://c.tenor.com/m47lcDCfPmIAAAAd/tenor.gif",
    "mr. bitch ass",
    "hardstuck bronze 1",
    "pussy nigga",
    "hiyaaa ^-^",
    "nyaaa",
    "UwU mwuahhh",
    
];

client.once('ready', () => {
    console.log('Bot is ready!');
 client.user.setPresence({ 
    status: 'idle' 
});
    // Start the interval for sending messages
    sendRandomMessage();
});

client.on('messageCreate', message => {
    // Ignore messages from the bot itself and messages not in the specified channels
    if (message.author.bot || !['gen', 'chat', 'general'].includes(message.channel.name.toLowerCase())) return;

    // Reset the interval whenever a message is received in the target channels
    resetInterval();
});

function sendRandomMessage() {
    // Select a random message from the list
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Find the target channels
    const targetChannels = client.channels.cache.filter(channel => ['gen', 'chat', 'general'].includes(channel.name.toLowerCase()) && channel.type === 'GUILD_TEXT');
    
    // Send the random message to each target channel
    targetChannels.forEach(channel => {
        channel.send(randomMessage)
            .then(() => console.log(`Message sent in ${channel.name}: ${randomMessage}`))
            .catch(error => console.error('Error sending message:', error));
    });

    // Get a random delay between 5 to 15 minutes (300,000 to 900,000 milliseconds)
    const delay = Math.floor(Math.random() * (900000 - 300000 + 1)) + 300000;
    
    // Set the timeout for the next message
    setTimeout(sendRandomMessage, delay);
}

function resetInterval() {
    // Clear the current timeout and reset it to a new interval
    clearTimeout(sendRandomMessage);
    sendRandomMessage();
}

client.login(TOKEN);
