import { test } from "edex-ui-test";

export async function testEdexUI() {
  try {
    await test();
    console.log("Edex-UI Cybersecurity Platform tested successfully!");
  } catch (error) {
    console.error(error);
  }
}
