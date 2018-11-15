const secrets = require("secrets.js");
const readline = require('readline');
const wif = require("wif");
const b58c = require("base58check")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('输入密钥，分割份数，门限，以一个空格隔开: ', (input) => {
  const inputs = input.split(" ");
  var sk = inputs[0];
  var sh = inputs[1];
  var th = inputs[2];

  try {
    // btc
    b58c.decode(sk) // just test if sk is base58check
    sk = wif.decode(sk).privateKey;
    sk = byteToHexString(sk);
    var shares = secrets.share(sk, parseInt(sh), parseInt(th));
  } catch (_e) {
    // eth
    shares = secrets.share(sk, parseInt(sh), parseInt(th));
  }

  console.log(shares)

  rl.close();
});

function byteToHexString(uint8arr) {
  if (!uint8arr) {
    return '';
  }

  var hexStr = '';
  for (var i = 0; i < uint8arr.length; i++) {
    var hex = (uint8arr[i] & 0xff).toString(16);
    hex = (hex.length === 1) ? '0' + hex : hex;
    hexStr += hex;
  }

  return hexStr.toLocaleLowerCase();
}