#!/usr/bin/env node

var cp = require('child_process');
var program = require('commander');

var api = require('../data/api.json');

program
  .version('0.1.1')
  .parse(process.argv);

program.on('--help', function(){
  console.log('  Usage:');
  console.log('');
  console.log('    $ qrcode <url>    specify the url.')
  console.log('');
  console.log('  Examples:');
  console.log('');
  console.log('    $ qrcode https://github.com/modood/make-qrcode');
  console.log('');
});

if (program.args.length > 0) {
  if (!/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i.test(program.args[0])) {
    console.log('Failed. URL is illegal. enter `qrcode` to get help.');
    process.exit();
  }
  console.log('please wait...');
  cp.execSync('wget -O qrcode.png ' + api[0] + program.args[0]);
  console.log('It\'s saved as qrcode.png, check your current directory!');
} else {
  program.outputHelp();
}
