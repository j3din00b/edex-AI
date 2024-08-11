import { refineUI } from "edex-ui-refine";

export async function refineEdexUI() {
  try {
    await refineUI();
    console.log("Edex-UI Cybersecurity Platform UI refined and polished!");
  } catch (error) {
    console.error(error);
  }
}
