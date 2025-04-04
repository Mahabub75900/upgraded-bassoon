const moment = require('moment-timezone');
const axios = require('axios');
const fs = require('fs');

module.exports = {
  config: {
    name: "datetime",
    aliaises: ["date", "time"],
    version: "1.6",
    author: "kae",
    countdown: 5,
    role: 0,
    shortDescription: "Displays the current date and time in Dhaka, Bangladesh.",
    longDescription: "This command provides the current date and time in Dhaka, Bangladesh along with an image.",
    category: "misc",
    guide: "{prefix}{name}",
    envConfig: {}
  },

  onStart: async function ({ message }) {
    try {
      const timezone = "Asia/Dhaka";
      const now = moment().tz(timezone);

      // Format date and time
      const reply = `📅 **Date & Time in Dhaka, Bangladesh**\n` +
        `❏ **Date:** ${now.format("dddd, DD MMMM YYYY")}\n` +
        `❏ **Time:** ${now.format("h:mm:ss A")} (UTC+6)\n` +
        `❏ **Author:** MR᭄﹅ MAHABUB﹅ メꪜ`;

      // Image URL (Your Imgur link)
      const imageUrl = "https://i.imgur.com/Ms7z3y0.jpeg";

      // Download image and save temporarily
      const imagePath = `${__dirname}/dhaka-time.jpg`;
      const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
      fs.writeFileSync(imagePath, response.data);

      // Send message with image attachment
      message.reply({
        body: reply,
        attachment: fs.createReadStream(imagePath)
      }, () => {
        // Delete the image file after sending
        fs.unlinkSync(imagePath);
      });

    } catch (error) {
      console.error("Error retrieving date and time:", error);
      message.reply("⚠️ An error occurred while retrieving the date and time.");
    }
  },

  onEvent: async function () {}
};
