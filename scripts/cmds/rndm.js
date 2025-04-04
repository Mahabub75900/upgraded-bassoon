const axios = require("axios");

module.exports = {
  config: {
    name: "rndm",
    aliases: ["mahabub", "rndm", "random", "status"],
    version: "2.2",
    author: "‎MR᭄﹅ MAHABUB﹅ メꪜ",
    countDown: 1,
    role: 0,
    shortDescription: "Sends random videos",
    longDescription: "Fetches and sends a random video from an external JSON file.",
    category: "fun",
    guide: "{pn}"
  },

  onStart: async function ({ api, event, message }) {
    await sendAnimeVideo(api, event, message);
  },

  onChat: async function ({ api, event, message }) {
    const { body } = event;
    if (!body) return;

    const messageText = body.trim().toLowerCase();

    if (["rndm", "mahabub", "random", "status"].includes(messageText)) {
      await sendAnimeVideo(api, event, message);
    }
  }
};

let lastMessage = "";

async function sendAnimeVideo(api, event, message) {
  const { threadID, messageID } = event;

  message.reply("🔄 Fetching a random status video... Please wait!");

  const jsonUrl = "https://raw.githubusercontent.com/MR-MAHABUB-004/MAHABUB-BOT-STORAGE/main/Commands/Rndm/rndm.json";

  try {
    const response = await axios.get(jsonUrl);
    const data = response.data;

    if (!data.videos || data.videos.length === 0) {
      return message.reply("❌ No videos found. Please try again later.");
    }

    // Select a random video
    const randomVideo = data.videos[Math.floor(Math.random() * data.videos.length)];

    // Validate the video URL
    if (!randomVideo.startsWith("http")) {
      return message.reply("❌ Invalid video URL. Please try again later.");
    }
    let randomMessage;
    if (data.messages && data.messages.length > 0) {
      let uniqueMessages = data.messages.filter(msg => msg !== lastMessage);
      randomMessage = uniqueMessages.length > 0 
        ? uniqueMessages[Math.floor(Math.random() * uniqueMessages.length)] 
        : lastMessage;
    } else {
      randomMessage = "video title unfind..!";
    }

    lastMessage = randomMessage; 

    message.reply({
      body: randomMessage,
      attachment: await global.utils.getStreamFromURL(randomVideo)
    });

  } catch (error) {
    console.error("❌ Error fetching video:", error);
    return message.reply("❌ Failed to load video. Please try again later.");
  }
}
