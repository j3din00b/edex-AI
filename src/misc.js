import { Nebula } from "nebula";
import { Athena } from "athena";
import { GenkitPlugins } from "genkit-plugins";
import { NeMoFrameworkLauncher } from "nemo-framework-launcher";
import { LLaMARecipes } from "llama-recipes";
import { OpenVINOGenAI } from "openvino-genai";
import { DocsGPT } from "docs-gpt";
import { HuggingFaceJS } from "huggingface-js";
import { HackerGPT2 } from "hacker-gpt-2";

const miscTools = {
  nebula: new Nebula(),
  athena: new Athena(),
  genkitPlugins: new GenkitPlugins(),
  neMoFrameworkLauncher: new NeMoFrameworkLauncher(),
  llamaRecipes: new LLaMARecipes(),
  openVINOGenAI: new OpenVINOGenAI(),
  docsGPT: new DocsGPT(),
  huggingFaceJS: new HuggingFaceJS(),
  hackerGPT2: new HackerGPT2(),
};

export async function runMiscTool(toolName, options) {
  try {
    const tool = miscTools[toolName];
    const result = await tool.run(options);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}
