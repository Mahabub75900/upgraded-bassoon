const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "audio",
		version: "1.0",
		author: "AceGun",
		countDown: 5,
		role: 0,
		shortDescription: "no prefix",
		longDescription: "no prefix",
		category: "no prefix",
	},
	onStart: async function () { },
	onChat: async function ({ event, message }) {
		if (event.body) {
			const word = event.body.toLowerCase();
			const folderPath = path.join(__dirname, "noprefix"); // Folder where MP3s are stored

			const audioResponses = {
				"🐒": { text: "কিরে বানর তোর কি হলো🐒", file: "banortor.mp3" },
				"🖕": { text: "আঙুল তোমার পেছনে ভরে দিবো 😹", file: "angul79.mp3" },
				"😒": { text: "তুমি এটিটিউড দেখাচ্ছো তাতে আমার বাল ছেড়া গেলো😞", file: "attitude.mp3" },
				"🥵": { text: "ছাড়ো না বেবি 😧", file: "betha.mp3" },
				"😺": { text: "😚🫶", file: "billitah.mp3" },
				"👙": { text: "ছিহ কি দেও এইসব", file: "kinedaw.mp3" },
				"💔": { text: "তোমার কি ব্রেকাপ হয়েছে", file: "brkup.mp3" },
				"👻": { text: "ভুত কই থেকে আসলো 😑", file: "buth.mp3" },
				"😙": { text: "লুচ্চামি ছাড় 🙂", file: "cumah.mp3" },
				"🍼": { text: "ফিডার খাও বাবু 😺", file: "fider.mp3" },
				"🤰": { text: "এইটা তুমি কি করলা বাবু", file: "pregnant.mp3" },
				"🐰": { text: "খরগোশ 😘", file: "korgus.mp3" }
			};

			if (audioResponses[word]) {
				const filePath = path.join(folderPath, audioResponses[word].file);

				// Check if file exists before sending
				if (fs.existsSync(filePath)) {
					return message.reply({
						body: `「 ${audioResponses[word].text} 」`,
						attachment: fs.createReadStream(filePath),
					});
				} else {
					return message.reply(`Error: File "${audioResponses[word].file}" not found!`);
				}
			}
		}
	}
};
