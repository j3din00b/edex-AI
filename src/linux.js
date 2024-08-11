
import { Katoolin } from 'katoolin';
import { ManpagesDev } from 'manpages-dev';
import { LinuxCommandLibrary } from 'linux-command-library';
import { KaisenLinux } from 'kaisen-linux';
import { KaisenTools } from 'kaisen-tools';

const linuxTools = {
  katoolin: new Katoolin(),
  manpagesDev: new ManpagesDev(),
  linuxCommandLibrary: new LinuxCommandLibrary(),
  kaisenLinux: new KaisenLinux(),
  kaisenTools: new KaisenLinux(),
  
  export async function runLinuxTool(toolName, options) {
    try {
      const tool = linuxTools[toolName];
      const result = await tool.run(options);
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }