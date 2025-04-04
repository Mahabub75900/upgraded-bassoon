const axios = require("axios");
module.exports = {
  'config': {
    'name': "gemini",
    'aliases': ['ai', 'Ai', "Gemini", 'AI'],
    'version': 0x2,
    'author': "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
    'description': 'ai',
    'role': 0x0,
    'category': 'ai',
    'guide': {
      'en': "{p}{n} <Query>"
    }
  },
  'onStart': async function ({
    message: _0x5475bf,
    usersData: _0x55d74e,
    event: _0x33ce8b,
    api: _0x5e0949,
    args: _0x1d760e
  }) {
    try {
      if (_0x33ce8b.type === "message_reply" && _0x33ce8b.messageReply.attachments && _0x33ce8b.messageReply.attachments[0].type === "photo") {
        const _0x271a6a = encodeURIComponent(_0x33ce8b.messageReply.attachments[0].url);
        const _0x68cc3a = _0x1d760e.join(" ");
        const _0x3d5d93 = "https://sandipbaruwal.onrender.com/gemini2?prompt=" + encodeURIComponent(_0x68cc3a) + "&url=" + _0x271a6a;
        const _0x3c03e1 = await axios.get(_0x3d5d93);
        _0x5475bf.reply(_0x3c03e1.data.answer);
        return;
      }
      const _0x5e2462 = _0x33ce8b.senderID;
      const _0x28a5a7 = await _0x55d74e.get(_0x5e2462);
      const _0x3fe53f = _0x28a5a7.name;
      const _0x2ad3c1 = [{
        'id': _0x5e2462,
        'tag': _0x3fe53f
      }];
      const _0x3091f5 = _0x1d760e.join(" ");
      const _0x44da54 = encodeURIComponent(_0x3091f5);
      _0x5e0949.setMessageReaction('⏳', _0x33ce8b.messageID, () => {}, true);
      const _0x3a1f77 = await axios.get("https://sandipbaruwal.onrender.com/gemini?prompt=" + _0x44da54);
      const _0x33236c = _0x3a1f77.data.answer;
      _0x5e0949.setMessageReaction('✅', _0x33ce8b.messageID, () => {}, true);
      _0x5475bf.reply({
        'body': _0x3fe53f + ", " + _0x33236c,
        'mentions': _0x2ad3c1
      }, (_0x48f14b, _0x3afc5b) => {
        global.GoatBot.onReply.set(_0x3afc5b.messageID, {
          'commandName': this.config.name,
          'messageID': _0x3afc5b.messageID,
          'author': _0x33ce8b.senderID
        });
      });
    } catch (_0x8f9bb6) {
      console.error("Error:", _0x8f9bb6.message);
    }
  },
  'onReply': async function ({
    message: _0x361277,
    event: _0x129b39,
    Reply: _0x4b6613,
    args: _0x1cc274,
    api: _0x668e78,
    usersData: _0x1a215d
  }) {
    try {
      const _0x449617 = _0x129b39.senderID;
      const _0x17b94e = await _0x1a215d.get(_0x449617);
      const _0x42bbef = _0x17b94e.name;
      const _0x2759d5 = [{
        'id': _0x449617,
        'tag': _0x42bbef
      }];
      const _0x446ed9 = _0x1cc274.join(" ");
      const _0x1605f6 = encodeURIComponent(_0x446ed9);
      _0x668e78.setMessageReaction('⏳', _0x129b39.messageID, () => {}, true);
      const _0x23fea4 = await axios.get("https://sandipbaruwal.onrender.com/gemini?prompt=" + _0x1605f6);
      const _0x194af1 = _0x23fea4.data.answer;
      _0x668e78.setMessageReaction('✅', _0x129b39.messageID, () => {}, true);
      _0x361277.reply({
        'body': _0x42bbef + ", " + _0x194af1,
        'mentions': _0x2759d5
      }, (_0x18e053, _0x58d1d4) => {
        global.GoatBot.onReply.set(_0x58d1d4.messageID, {
          'commandName': this.config.name,
          'messageID': _0x58d1d4.messageID,
          'author': _0x129b39.senderID
        });
      });
    } catch (_0x4894ba) {
      console.error("Error:", _0x4894ba.message);
    }
  }
};
