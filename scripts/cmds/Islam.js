module.exports.config = {
  'name': "islam",
  'version': "1.0.1",
  'role': 0x0,
  'author': "MAHABUB RAHMAN",
  'description': "get islamick+video",
  'category': "media",
  'usages': "islam+video",
  'countDowns': 0x5,
  'dependencies': {
    'request': ''
  }
};
module.exports.onStart = async ({
  api: _0x53b67e,
  event: _0x196d9e,
  args: _0x6abc4e,
  client: _0x2e889b,
  Users: _0x14cac9,
  Threads: _0x473044,
  __GLOBAL: _0x2b5fa7,
  Currencies: _0x47cd90
}) => {
  const _0x200c91 = require("request");
  const _0x103f74 = require("fs-extra");
  var _0x3252de = ["╔══❖•MAHABUB-BOT•❖══╗\n\n【•ISLAMIC-VIDEO•】\n\n╚══❖•MAHABUB-BOT•❖══╝"];
  var _0x352906 = _0x3252de[Math.floor(Math.random() * _0x3252de.length)];
  var _0x3d56cc = ["https://drive.google.com/uc?id=1Zl_I96I_ItJMCO2tTjzKypH2hgv5bbmD", "https://drive.google.com/uc?id=1Zl0IyIK_hWvtDip1UW4kHcg9EuAGQdmZ", "https://drive.google.com/uc?id=1ZhtkY8ZQI3cybm_GSv7aSTC--Mx3aB2p", "https://drive.google.com/uc?id=1ZoHlB4898wKgfs9OEGBRdwOFVc2YhZW6", "https://drive.google.com/uc?id=1Zwg90Uest4IQViMiQB5bRYq5jJwitC6L", "https://drive.google.com/uc?id=1_8QKHZCblDgSwgYVx36h4P4v5gdrdGDZ", "https://drive.google.com/uc?id=1_BfZZxhimqFy70nNj7TFFLe6jH49cKVW", "https://drive.google.com/uc?id=1_KEz-3u7vP5sPFHsGNdfLsNoWP0aBatP", "https://drive.google.com/uc?id=1_PI6gtf-E0jrYv8n-k1s9YpsIC2AYxrk", "https://drive.google.com/uc?id=1aP50As3s7g4589WjuDjQs6n-8fw3RnRJ", "https://drive.google.com/uc?id=1agG9tp4pV0df0yK67DeKXr4imk8Cg3DH", "https://drive.google.com/uc?id=1qvT2dwO7dytupRRQcUdhDfHbqTFR21JI", "https://drive.google.com/uc?id=1qi_iL6FB_OVBVYw3HAWvnQgXBGtRrUO1", "https://drive.google.com/uc?id=1qspziP8dW7ksRvykkekZPZlFyLpGTeB5", "https://drive.google.com/uc?id=1qYDNiNGDw05GMEnffAx-wzAkNvB135Xv", "https://drive.google.com/uc?id=1qv8PRCjaTydXkILuZy5HUyI6wW4jtOW5", "https://drive.google.com/uc?id=1qkU11Pz0YM5YnkJUnqDj9l7o0Pk6LnO5", "https://drive.google.com/uc?id=1qZGJGq5dOLDPDB1H8TqC0RBi4X9zCFER", "https://drive.google.com/uc?id=1qx6DrMFbKl4j4e4BmkSZPjPe5HJX0aKF", "https://drive.google.com/uc?id=1qRWCfHjp-q2v73cqAhuKkmecrC4DWry", "https://drive.google.com/uc?id=1qwhnM75GeoKroHP2c1NOWcaUKlgIQUab"];
  var _0x45e12a = () => _0x53b67e.sendMessage({
    'body': '' + _0x352906,
    'attachment': _0x103f74.createReadStream(__dirname + "/cache/B4D9L.mp4")
  }, _0x196d9e.threadID, () => _0x103f74.unlinkSync(__dirname + "/cache/B4D9L.mp4"));
  return _0x200c91(encodeURI(_0x3d56cc[Math.floor(Math.random() * _0x3d56cc.length)])).pipe(_0x103f74.createWriteStream(__dirname + "/cache/B4D9L.mp4")).on("close", () => _0x45e12a());
};
