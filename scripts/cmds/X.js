module.exports.config = {
  'name': 'x',
  'version': "1.0.1",
  'role': 0x0,
  'author': "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
  'description': "Get Voice",
  'category': "media",
  'usages': "[bn] [Text]",
  'countDowns': 0x5,
  'dependencies': {
    'path': '',
    'fs-extra': ''
  }
};
module.exports.onStart = async function ({
  api: _0x27a06a,
  event: _0xc0f0db,
  args: _0x50e1cc
}) {
  try {
    const {
      createReadStream: _0x2c1fb9,
      unlinkSync: _0x34adeb
    } = require("fs-extra");
    const {
      resolve: _0x1fd9c4
    } = require("path");
    var _0x50791f = _0xc0f0db.type == "message_reply" ? _0xc0f0db.messageReply.body : _0x50e1cc.join(" ");
    var _0x5401e7 = ['bn'].some(_0x4bd48f => _0x50791f.indexOf(_0x4bd48f) == 0) ? _0x50791f.slice(0, _0x50791f.indexOf(" ")) : global.GoatBot.config.language;
    var _0x548c3b = _0x5401e7 != global.GoatBot.config.language ? _0x50791f.slice(3, _0x50791f.length) : _0x50791f;
    const _0x41e00b = _0x1fd9c4(__dirname, "cache", _0xc0f0db.threadID + '_' + _0xc0f0db.senderID + ".mp3");
    await global.utils.downloadFile("https://translate.google.com/translate_tts?ie=UTF-8&q=" + encodeURIComponent(_0x548c3b) + "&tl=bn&client=tw-ob", _0x41e00b);
    return _0x27a06a.sendMessage({
      'attachment': _0x2c1fb9(_0x41e00b)
    }, _0xc0f0db.threadID, () => _0x34adeb(_0x41e00b));
  } catch (_0x3811ea) {
    return console.log(_0x3811ea);
  }
  ;
};
