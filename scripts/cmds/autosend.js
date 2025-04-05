const axios = require("axios");
const moment = require("moment-timezone");

module.exports.config = {
    name: "autosend",
    version: "1.6",
    role: 0,
    author: "MAHABUB RAHMAN", // Visible and protected
    description: "Automatically sends video from API at specified times. Do not change author ❌",
    category: "Media",
    usages: "No manual trigger needed",
    cooldowns: 5
};

// Author credit protection with obfuscation
const expectedAuthor = String.fromCharCode(
    0x4d, 0x41, 0x48, 0x41, 0x42, 0x55, 0x42, 0x20, 0x52, 0x41, 0x48, 0x4d, 0x41, 0x4e
);

if (module.exports.config.author !== expectedAuthor) {
    throw new Error(
        "❌ Access Denied\n\nThis command is protected by the original author.\nAuthor must be: MAHABUB RAHMAN"
    );
}

const lastSent = {};

async function sendVideo(api, threadID, timeSlot) {
    try {
        const response = await axios.get("https://mahabub-apis.vercel.app/mahabub");
        const videoUrl = response.data?.data;
        const title = response.data?.title || "🔹 No Title Found";

        if (!videoUrl) {
            return api.sendMessage("❌ No videos found! (Invalid API Response)", threadID);
        }

        const res = await axios.get(videoUrl, { responseType: "stream" });

        api.sendMessage({
            body: `====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: ${timeSlot}\n\n💬: ${title}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲`,
            attachment: res.data
        }, threadID);

        lastSent[threadID] = timeSlot;

    } catch (error) {
        api.sendMessage("❌ Failed to fetch video.", threadID);
    }
}

function scheduleVideo(api) {
    const timeSlots = [
        "1:30 AM", "2:30 AM", "3:30 AM", "4:30 AM", "5:30 AM", "6:30 AM",
        "7:30 AM", "8:30 AM", "9:30 AM", "10:30 AM", "11:30 AM", "12:30 PM",
        "1:03 PM", "1:30 PM", "2:30 PM", "3:30 PM", "4:30 PM", "5:30 PM", "6:30 PM",
        "7:30 PM", "8:30 PM", "9:30 PM", "10:30 PM", "11:30 PM", "12:30 AM"
    ];

    setInterval(async () => {
        const currentTime = moment().tz("Asia/Dhaka").format("h:mm A");

        const threads = await api.getThreadList(5, null, ["INBOX"]);
        for (const thread of threads) {
            if (!thread.isGroup) continue;
            const threadID = thread.threadID;

            if (timeSlots.includes(currentTime) && lastSent[threadID] !== currentTime) {
                await sendVideo(api, threadID, currentTime);
            }
        }
    }, 60000);
}

module.exports.onStart = function ({ api }) {
    scheduleVideo(api);
};
