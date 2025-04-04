module.exports = {
  'config': {
    'name': 'up',
    'aliases': ["uptime", "upt"],
    'version': "1.0",
    'author': "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
    'role': 0x0,
    'shortDescription': {
      'en': "uptime robot"
    },
    'longDescription': {
      'en': "shows uptime of bot."
    },
    'category': "system-mbc",
    'guide': {
      'en': "Use {p}up to see up of bot."
    }
  },
  'onStart': async function ({
    api: _0x569443,
    message: _0x40926c,
    threadsData: _0x4b16d1
  }) {
    const _0x45dac3 = require('os');
    const _0x25148b = _0x45dac3.uptime();
    const _0xa56507 = Math.floor(_0x25148b / 86400);
    const _0x2728dc = Math.floor(_0x25148b % 86400 / 3600);
    const _0xbfe13c = Math.floor(_0x25148b % 3600 / 60);
    const _0x1d0e60 = Math.floor(_0x25148b % 60);
    const _0x7fcee8 = new Date();
    const _0x4509e6 = {
      'year': "numeric",
      'month': "numeric",
      'day': "numeric"
    };
    const _0x37001b = _0x7fcee8.toLocaleDateString("en-US", _0x4509e6);
    const _0x594ef0 = _0x7fcee8.toLocaleTimeString("en-US", {
      'timeZone': "Asia/Dhaka",
      'hour12': true
    });
    const _0x507ec7 = "OS: " + _0x45dac3.platform() + " " + _0x45dac3.release();
    const _0x54e9fd = "Cores: " + _0x45dac3.cpus().length;
    const _0x58acc4 = "UPTIME: " + _0xa56507 + " দিন, " + _0x2728dc + " ঘন্টা, " + _0xbfe13c + " মিনিট " + _0x1d0e60 + " সেকেন্ড";
    const _0x344602 = "╔╝❮❮𝗨𝗣𝗧𝗜𝗠𝗘-𝗥𝗢𝗕𝗢𝗧❯❯╚╗\n\n━❯ " + _0x58acc4 + "\n\n━━━━━━━━━━━━━━━━━━━━━━\n━❯ 𝗠𝗔𝗛𝗔𝗕𝗨𝗕 𝗥𝗔𝗛𝗠𝗔𝗡\n━❯ 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘: 𝗠𝗔𝗛𝗔𝗕𝗨𝗕-𝗕𝗢𝗧\n━❯ 𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜𝗫:【/】\n━❯ " + _0x507ec7 + "\n━❯ " + _0x54e9fd + "\n━❯ Total Users: " + _0x4b16d1.size + "\n━❯ Total Threads: " + _0x4b16d1.size + "\n━❯ AI Usage: 0.0\n━❯ RAM Usage: " + Math.round(process.memoryUsage().rss / 1048576) + " MB\n━❯ Total(RAM): " + Math.round(_0x45dac3.totalmem() / 1073741824) + " GB\n━❯ Current(RAM): " + Math.round(_0x45dac3.freemem() / 1073741824) + " GB\n━❯ Ping: 15 ms\n━❯ Uptime(Seconds): " + Math.floor(process.uptime()) + "\n━━━━━━━━━━━━━━━━━━━━━━\n【 " + _0x37001b + " || " + _0x594ef0 + " 】";
    _0x40926c.reply({
      'body': _0x344602,
      'attachment': await global.utils.getStreamFromURL("https://i.imgur.com/JjI8pQu.gif")
    });
  }
};
