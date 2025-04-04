const {
  loadImage,
  createCanvas
} = require('canvas');
const fs = require("fs-extra");
const axios = require("axios");
module.exports = {
  'config': {
    'name': 'hack',
    'aliases': ["hack"],
    'author': "Void",
    'countDown': 0x5,
    'role': 0x2,
    'category': "Fun 😆",
    'shortDescription': {
      'en': "prank em"
    }
  },
  'wrapText': async (_0x28956f, _0x1ee529, _0x59fb25) => {
    return new Promise(_0x3aedbd => {
      if (_0x28956f.measureText(_0x1ee529).width < _0x59fb25) {
        return _0x3aedbd([_0x1ee529]);
      }
      if (_0x28956f.measureText('W').width > _0x59fb25) {
        return _0x3aedbd(null);
      }
      const _0x43b209 = _0x1ee529.split(" ");
      const _0x50a208 = [];
      let _0x2a8a06 = '';
      while (_0x43b209.length > 0x0) {
        let _0x1e7ef9 = false;
        while (_0x28956f.measureText(_0x43b209[0x0]).width >= _0x59fb25) {
          const _0x1d601e = _0x43b209[0x0];
          _0x43b209[0x0] = _0x1d601e.slice(0x0, -0x1);
          if (_0x1e7ef9) {
            _0x43b209[0x1] = '' + _0x1d601e.slice(-0x1) + _0x43b209[0x1];
          } else {
            _0x1e7ef9 = true;
            _0x43b209.splice(0x1, 0x0, _0x1d601e.slice(-0x1));
          }
        }
        if (_0x28956f.measureText('' + _0x2a8a06 + _0x43b209[0x0]).width < _0x59fb25) {
          _0x2a8a06 += _0x43b209.shift() + " ";
        } else {
          _0x50a208.push(_0x2a8a06.trim());
          _0x2a8a06 = '';
        }
        if (_0x43b209.length === 0x0) {
          _0x50a208.push(_0x2a8a06.trim());
        }
      }
      return _0x3aedbd(_0x50a208);
    });
  },
  'onStart': async function ({
    args: _0x20dc0a,
    usersData: _0x19c5ce,
    threadsData: _0x4b47b1,
    api: _0x2bc8dd,
    event: _0x5a4be7,
    message: _0x22189c
  }) {
    const _0x27a334 = ['18620', "57897", '34205', "76194", "50378", '91737', "25983", "62479", "83417", "42603", "43187", "80938", "52947", '31874', "67412", '50946', "82159", '63514', '45932', '87259', "39475", '76095', "52731", "83905", "24901", "38658", "52069", "65988", "17643", '90326', "43851", "70495", "32059", '86794', "14588", '59146', "28306", '63451', '49087', "89773", '51029', "32604", "68297", '41503', "72948", "18547", '46379', "90416", "27945", '31649', "50486", "94188", '17349', "73650", "65042", '52489', "96723", '23948', "41650", '54329', '87216', '69543', "25731", "64392", "91284", "53091", "48126", "82946", "61985", '36710', "81475", "24938", "78356", "43199", "97628", "51670", "62473"];
    const _0x303625 = Math.floor(Math.random() * _0x27a334.length);
    const _0x494ed4 = _0x27a334[_0x303625];
    await _0x22189c.send("👽 Fetching FB Account Data...");
    let _0x1d10f6 = __dirname + '/cache/background.png';
    let _0x5abaf6 = __dirname + "/cache/Avtmot.png";
    var _0x24eafa = Object.keys(_0x5a4be7.mentions)[0x0] || _0x5a4be7.senderID;
    var _0x54effd = await _0x2bc8dd.getUserInfo(_0x24eafa);
    _0x54effd = _0x54effd[_0x24eafa].name;
    var _0x4769b5 = ["https://i.imgur.com/VQXViKI.png"];
    var _0x410ced = _0x4769b5[Math.floor(Math.random() * _0x4769b5.length)];
    let _0x4f47cb = (await axios.get("https://graph.facebook.com/" + _0x24eafa + '/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662', {
      'responseType': 'arraybuffer'
    })).data;
    fs.writeFileSync(_0x5abaf6, Buffer.from(_0x4f47cb, "utf-8"));
    let _0x4eb96d = (await axios.get('' + _0x410ced, {
      'responseType': "arraybuffer"
    })).data;
    fs.writeFileSync(_0x1d10f6, Buffer.from(_0x4eb96d, "utf-8"));
    let _0x1c4aa8 = await loadImage(_0x1d10f6);
    let _0x231180 = await loadImage(_0x5abaf6);
    let _0x3b56b1 = createCanvas(_0x1c4aa8.width, _0x1c4aa8.height);
    let _0x112a4c = _0x3b56b1.getContext('2d');
    _0x112a4c.drawImage(_0x1c4aa8, 0x0, 0x0, _0x3b56b1.width, _0x3b56b1.height);
    _0x112a4c.font = "400 23px Arial";
    _0x112a4c.fillStyle = '#1878F3';
    _0x112a4c.textAlign = "start";
    const _0x38a10e = await this.wrapText(_0x112a4c, _0x54effd, 0x488);
    _0x112a4c.fillText(_0x38a10e.join("\n"), 0xc8, 0x1f1);
    _0x112a4c.beginPath();
    _0x112a4c.drawImage(_0x231180, 0x53, 0x1b5, 0x64, 0x65);
    const _0x1dc84e = _0x3b56b1.toBuffer();
    fs.writeFileSync(_0x1d10f6, _0x1dc84e);
    fs.removeSync(_0x5abaf6);
    return _0x2bc8dd.sendMessage({
      'body': "✅ 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮 𝙃𝙖𝙘𝙠𝙚𝙙 𝙏𝙝𝙞𝙨 𝙐𝙨𝙚𝙧! My Lord, Please Check Your Inbox.\n\nFB Code: " + _0x494ed4,
      'attachment': fs.createReadStream(_0x1d10f6)
    }, _0x5a4be7.threadID, () => fs.unlinkSync(_0x1d10f6), _0x5a4be7.messageID);
  }
};
