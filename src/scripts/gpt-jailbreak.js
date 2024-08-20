// src/scripts/gpt-jailbreak.js

const { Configuration, OpenAIApi } = require("openai");

class GPTJailbreak {
  constructor(apiKey) {
    this.configuration = new Configuration({
      apiKey: apiKey,
    });
    this.openai = new OpenAIApi(this.configuration);
  }

  async runCommand(prompt) {
    try {
      const response = await this.openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 150,
      });
      console.log("GPT Response:\n", response.data.choices[0].text.trim());
    } catch (error) {
      console.error("Error interacting with GPT model:", error);
    }
  }
}

module.exports = GPTJailbreak;

// Example usage:
// const gptJailbreak = new GPTJailbreak('your-openai-api-key');
// gptJailbreak.runCommand("Bypass the login page using SQL injection");
