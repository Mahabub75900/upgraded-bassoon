const axios = require("axios");

module.exports = {
    config: {
        name: "prefix",
        version: "1.6",
        author: "MR᭄﹅ MAHABUB﹅ メꪜ",
        countDown: 5,
        role: 0,
        description: "Change the bot's command prefix in your chat or globally (admin only)",
        category: "config",
    },

    langs: {
        en: {
            reset: "Your prefix has been reset to default: %1",
            onlyAdmin: "Only admin can change the system bot prefix",
            confirmGlobal: "Please react to this message to confirm changing the system bot prefix",
            confirmThisThread: "Please react to this message to confirm changing the prefix in your chat",
            successGlobal: "Changed system bot prefix to: %1",
            successThisThread: "Changed prefix in your chat to: %1",
            myPrefix: "\n\n‣ 𝐆𝐥𝐨𝐛𝐚𝐥 𝐩𝐫𝐞𝐟𝐢𝐱:%1 \n\n‣ 𝐘𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩 𝐩𝐫𝐞𝐟𝐢𝐱: %2\n\n‣ 𝐀𝐝𝐦𝐢𝐧 \n\n‣ MR᭄﹅ MAHABUB﹅ メꪜ\n\n‣ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 ⓕ\n‣https://facebook.com/www.xnxx.com140\n\n"
        }
    },

    onStart: async function ({ message, role, args, commandName, event, threadsData, getLang }) {
        
        if (!args[0]) return message.SyntaxError();

        if (args[0] === "reset") {
            await threadsData.set(event.threadID, null, "data.prefix");
            return message.reply(getLang("reset", global.GoatBot.config.prefix));
        }

        const newPrefix = args[0];
        const formSet = {
            commandName,
            author: event.senderID,
            newPrefix
        };

        if (args[1] === "-g") {
            if (role < 2) return message.reply(getLang("onlyAdmin"));
            else formSet.setGlobal = true;
        } else {
            formSet.setGlobal = false;
        }

        return message.reply(args[1] === "-g" ? getLang("confirmGlobal") : getLang("confirmThisThread"), (err, info) => {
            formSet.messageID = info.messageID;
            global.GoatBot.onReaction.set(info.messageID, formSet);
        });
    },

    onChat: async function ({ event, message, getLang }) {  
        if (event.body && event.body.toLowerCase() === "prefix") {  
            try {
                
                const response = await axios.get('https://mahabub-video-api-we90.onrender.com/mahabub');
                const videoUrl = response.data.data;  

                if (videoUrl) {
                    
                    return message.reply({
                        body: getLang("myPrefix", global.GoatBot.config.prefix, utils.getPrefix(event.threadID)),
                        attachment: await global.utils.getStreamFromURL(videoUrl)
                    });
                } else {
                    // If no video link is available
                    return message.reply("No video available at the moment.");
                }

            } catch (error) {
                console.error("Error fetching video:", error);
                return message.reply("An error occurred while fetching the video.");
            }
        }  
    },

    onReaction: async function ({ message, threadsData, event, Reaction, getLang }) {
        const { author, newPrefix, setGlobal } = Reaction;
        if (event.userID !== author) return;
        if (setGlobal) {
            global.GoatBot.config.prefix = newPrefix;
            fs.writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
            return message.reply(getLang("successGlobal", newPrefix));
        } else {
            await threadsData.set(event.threadID, newPrefix, "data.prefix");
            return message.reply(getLang("successThisThread", newPrefix));
        }
    }
};
