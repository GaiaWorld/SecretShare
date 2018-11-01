const secrets = require("secrets.js")
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('输入密钥，分割份数，门限，以一个空格隔开: ', (input) => {
  const inputs = input.split(" ");  
  var pk = inputs[0];
  var sh = inputs[1];
  var th = inputs[2];

  var shares = secrets.share(pk, parseInt(sh), parseInt(th));

  console.log(shares)

  rl.close();
});

