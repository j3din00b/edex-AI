// src/plugins/hackingtool-menu/index.js

const { exec } = require("child_process");

class HackingToolMenu {
  constructor() {
    this.tools = [
      { name: "SQLMap", command: "sqlmap -h" },
      { name: "John the Ripper", command: "john --help" },
      // Add more tools as needed
    ];
  }

  displayMenu() {
    console.log("Select a hacking tool to run:");
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

module.exports = HackingToolMenu;

// Example usage:
// const hackingToolMenu = new HackingToolMenu();
// hackingToolMenu.displayMenu();
// hackingToolMenu.executeTool(1); // To execute the first tool
