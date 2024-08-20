// src/modules/dorkscanner/index.js

const { exec } = require("child_process");

class DorkScanner {
  constructor() {
    this.dorks = [
      "inurl:admin.php",
      "intext:'SQL syntax' -github",
      // Add more dorks as needed
    ];
  }

  scan(targetUrl) {
    this.dorks.forEach((dork) => {
      const query = `${dork} site:${targetUrl}`;
      console.log(`Scanning with: ${query}`);
      exec(
        `curl -G --data-urlencode "q=${query}" https://www.google.com/search`,
        (err, stdout, stderr) => {
          if (err) {
            console.error(`Error scanning with dork: ${dork}`, stderr);
            return;
          }
          console.log(`Results for ${dork}:\n`, stdout);
        }
      );
    });
  }
}

module.exports = DorkScanner;
