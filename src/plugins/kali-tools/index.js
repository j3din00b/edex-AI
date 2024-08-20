// src/plugins/kali-tools/index.js

const { exec } = require("child_process");

class KaliToolsPlugin {
  constructor() {
    this.tools = [
      { name: "Nmap", command: "nmap" },
      { name: "Metasploit", command: "msfconsole" },
      { name: "Wireshark", command: "wireshark" },
      // Add more tools as needed
    ];
  }

  displayMenu() {
    console.log("Select a Kali Linux tool to run:");
    this.tools.forEach((tool, index) => {
      console.log(`${index + 1}. ${tool.name}`);
    });
    console.log("Enter the number of the tool you want to execute:");
  }

  executeTool(toolIndex) {
    const tool = this.tools[toolIndex - 1];
    if (tool) {
      exec(tool.command, (err, stdout, stderr) => {
        if (err) {
          console.error(`Error executing ${tool.name}:`, stderr);
          return;
        }
        console.log(`${tool.name} output:\n`, stdout);
      });
    } else {
      console.log("Invalid selection");
    }
  }
}

module.exports = KaliToolsPlugin;
