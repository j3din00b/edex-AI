// src/cli/index.js

const KaliToolsPlugin = require("../plugins/kali-tools");
const DorkScanner = require("../modules/dorkscanner");
const GPTJailbreak = require("../scripts/gpt-jailbreak");
const NaabuScanner = require("../scripts/naabu");

function CLI() {
  this.commands = {
    kali: new KaliToolsPlugin(),
    dork: new DorkScanner(),
    gpt: new GPTJailbreak("your-openai-api-key"),
    naabu: new NaabuScanner(),
    // Add more commands as needed
  };
}

CLI.prototype.executeCommand = function (command, args) {
  switch (command) {
    case "kali":
      this.commands.kali.displayMenu();
      break;
    case "dork":
      this.commands.dork.scan(args[0]);
      break;
    case "gpt":
      this.commands.gpt.runCommand(args.join(" "));
      break;
    case "naabu":
      this.commands.naabu.scan(args[0]);
      break;
    default:
      console.log("Unknown command");
  }
};

module.exports = CLI;

// Example usage:
// const cli = new CLI();
// cli.executeCommand('kali');
// cli.executeCommand('dork', ['example.com']);
// cli.executeCommand('gpt', ['Analyze this security vulnerability: SQL injection']);
