import { KaliLinuxToolsInterface } from "kali-linux-tools-interface";
import { DorkScanner } from "dork-scanner";
import { GPTJailbreak } from "gpt-jailbreak";
import { HackGPT } from "hack-gpt";
import { Naabu } from "naabu";
import { HackingTool } from "hacking-tool";

const cybersecurityTools = {
  kaliLinuxToolsInterface: new KaliLinuxToolsInterface(),
  dorkScanner: new DorkScanner(),
  gptJailbreak: new GPTJailbreak(),
  hackGPT: new HackGPT(),
  naabu: new Naabu(),
  hackingTool: new HackingTool(),
};

export async function runCybersecurityTool(toolName, options) {
  try {
    const tool = cybersecurityTools[toolName];
    const result = await tool.run(options);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}
