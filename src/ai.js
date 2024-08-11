import { ChaosGPT } from "chaos-gpt";
import { AutoGPT } from "auto-gpt";
import { XXXGPT } from "xxx-gpt";
import { ChatGPTAutoExpert } from "chat-gpt-auto-expert";
import { LLaMA } from "llama";

const aiModels = {
  chaosGPT: new ChaosGPT(),
  autoGPT: new AutoGPT(),
  xxxGPT: new XXXGPT(),
  chatGPTAutoExpert: new ChatGPTAutoExpert(),
  llama: new LLaMA(),
};

export async function runAIModel(modelName, input) {
  try {
    const model = aiModels[modelName];
    const output = await model.run(input);
    return output;
  } catch (error) {
    console.error(error);
    return null;
  }
}
