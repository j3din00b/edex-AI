// src/scripts/chaos-worm-gpt.js

const { Configuration, OpenAIApi } = require("openai");

class ChaosWormGPT {
  constructor(apiKey, model) {
    this.configuration = new Configuration({
      apiKey: apiKey,
    });
    this.openai = new OpenAIApi(this.configuration);
    this.model = model;
  }

  async generateResponse(prompt) {
    try {
      const response = await this.openai.createCompletion({
        model: this.model,
        prompt: prompt,
        max_tokens: 100,
      });
      console.log(
        `${this.model} Response:\n`,
        response.data.choices[0].text.trim()
      );
    } catch (error) {
      console.error(`Error with ${this.model}:`, error);
    }
  }
}

module.exports = ChaosWormGPT;

// Example usage:
// const chaosGPT = new ChaosWormGPT('your-openai-api-key', 'text-davinci-003');
// chaosGPT.generateResponse("Generate a malicious payload for testing");
