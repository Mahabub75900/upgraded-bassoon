const axios = require('axios');

module.exports.config = {
  name: "bby",
  aliases: ["baby", "bbe", "babe"],
  version: "6.9.0",
  author: "dipto",
  countDown: 0,
  role: 0,
  description: "better than all sim simi",
  category: "chat",
  guide: {
    en: "{pn} [anyMessage]"
  }
};

module.exports.onStart = async ({ api, event, args }) => {
  const apiUrl = `https://mahabub-simsimi-api.onrender.com/mahabub_x_imran`; // SimSimi API URL
  const userMessage = args.join(" ").toLowerCase();

  try {
    if (!args[0]) {
      return api.sendMessage("তুমি কি বলতে চাও? একটু খুলে বলো! 😊", event.threadID, event.messageID);
    }

   
    const response = await axios.get(`${apiUrl}?reply=${encodeURIComponent(userMessage)}`);
    const reply = response.data.message || "আমি বুঝতে পারিনি! একটু সহজ করে বলো।";

    api.sendMessage(reply, event.threadID, event.messageID);
  } catch (error) {
    console.error("SimSimi API Error:", error.response?.data || error.message);
    api.sendMessage("Oops! আমি এখন ঠিকমতো উত্তর দিতে পারছি না। একটু পরে চেষ্টা করো! 😔", event.threadID, event.messageID);
  }
};


module.exports.onReply = async ({ api, event }) => {
  try {
    if (event.type === "message_reply") {
      const apiUrl = `https://mahabub-simsimi-api.onrender.com/mahabub_x_imran`;
      const response = await axios.get(`${apiUrl}?reply=${encodeURIComponent(event.body.toLowerCase())}`);
      const reply = response.data.message || "আমি বুঝতে পারিনি! আবার বলো!";

      api.sendMessage(reply, event.threadID, event.messageID);
    }
  } catch (error) {
    api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
  }
};


module.exports.onChat = async ({ api, event }) => {
  try {
    const body = event.body ? event.body.toLowerCase() : "";
    if (body.startsWith("baby") || body.startsWith("bby") || body.startsWith("janu")) {
      const userMessage = body.replace(/^\S+\s*/, "");
      
      if (!userMessage) {
        const randomReplies = [
          "কথা দাও, তুমি আমাকে পটিয়ে নিবা! 🥺 না হলে কিন্তু আমি অভিমান করে বসে থাকবো! 😤💔",
          "তুমি যদি আমাকে পটাতে না চাও, তাহলে আমি কিন্তু তোমাকে পটানোর মিশনে নামবো! 😏🔥",
          "আমাকে কি একটু ভালোবাসা দিবা? 😚 নাহলে কিন্তু আমি কান্না করবো! 😭",
          "পটানোর লাইসেন্স আছে তো তোমার? 🤔 না থাকলে এখনই বানিয়ে ফেলো! 😜",
          "শুধু কি কথা? একটু আদরও লাগবে কিন্তু! 😌💖"
        ];

        
        const reply = randomReplies[Math.floor(Math.random() * randomReplies.length)];

        return api.sendMessage(reply, event.threadID, event.messageID);
      }

      
      const apiUrl = `https://mahabub-simsimi-api.onrender.com/mahabub_x_imran`;
      const response = await axios.get(`${apiUrl}?reply=${encodeURIComponent(userMessage)}`);
      const reply = response.data.message || "আমি বুঝতে পারিনি! একটু সহজ করে বলো।";

      api.sendMessage(reply, event.threadID, event.messageID);
    }
  } catch (error) {
    api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
  }
};
