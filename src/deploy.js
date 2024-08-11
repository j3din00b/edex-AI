import { deploy } from "edex-ui-deploy";

export async function deployEdexUI() {
  try {
    await deploy();
    console.log("Edex-UI Cybersecurity Platform deployed successfully!");
  } catch (error) {
    console.error(error);
  }
}
