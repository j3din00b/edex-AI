// src/plugins/kali-tools/index.test.js

const KaliToolsPlugin = require("./index");

test("KaliToolsPlugin should display a menu with tools", () => {
  const kaliTools = new KaliToolsPlugin();
  const consoleSpy = jest.spyOn(console, "log");
  kaliTools.displayMenu();
  expect(consoleSpy).toHaveBeenCalledWith(
    expect.stringContaining("Select a Kali Linux tool to run:")
  );
  consoleSpy.mockRestore();
});
