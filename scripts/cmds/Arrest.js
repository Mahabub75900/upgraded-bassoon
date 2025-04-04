const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");

module.exports = {
    config: {
        name: "arrest",
        aliases: ["arrest"],
        version: "1.0",
        author: "milan-says",
        countDown: 5,
        role: 0,
        shortDescription: "arrest the rapist",
        longDescription: "",
        category: "image",
        guide: {
            vi: "{pn} [@tag]",
            en: "{pn} [@tag]"
        }
    },

    onStart: async function ({ message, args, api, event }) {
        const mentions = Object.keys(event.mentions);
        if (mentions.length === 0) {
            return message.reply("Please mention someone.");
        }

        const one = event.senderID;
        const two = mentions[0];

        try {
            const imagePath = await generateImage(one, two);
            await message.reply({
                body: "You are under arrest",
                attachment: fs.createReadStream(imagePath)
            });
            fs.unlinkSync(imagePath); // Clean up the file after sending
        } catch (error) {
            console.error(error);
            message.reply("An error occurred while processing the image.");
        }
    }
};

async function generateImage(one, two) {
    try {
        const avone = await jimp.read(`https://graph.facebook.com/${one}/picture?width=512&height=512`);
        const avtwo = await jimp.read(`https://graph.facebook.com/${two}/picture?width=512&height=512`);

        avone.circle();
        avtwo.circle();

        const img = await jimp.read("https://i.imgur.com/ep1gG3r.png");
        img.resize(500, 500)
            .composite(avone.resize(100, 100), 375, 9)
            .composite(avtwo.resize(100, 100), 160, 92);

        const filePath = `./temp_${Date.now()}.png`;
        await img.writeAsync(filePath);
        return filePath;
    } catch (error) {
        throw new Error("Failed to generate image: " + error.message);
    }
}
