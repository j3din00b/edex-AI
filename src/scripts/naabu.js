// src/scripts/naabu.js

const { exec } = require("child_process");

class NaabuScanner {
  constructor() {
    this.command = "naabu -host";
  }

  scan(targetIp) {
    exec(`${this.command} ${targetIp}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error scanning ${targetIp}:`, stderr);
        return;
      }
      console.log(`Naabu Scan Results for ${targetIp}:\n`, stdout);
    });
  }
}

module.exports = NaabuScanner;

// Example usage:
// const naabuScanner = new NaabuScanner();
// naabuScanner.scan('192.168.1.1');
