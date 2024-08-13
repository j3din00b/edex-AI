import { OAuth2 } from "oauth2";

const auth = new OAuth2(
  "client_id",
  "client_secret",
  "authorization_url",
  "token_url"
);

export async function authenticate(username, password) {
  try {
    const token = await auth.getToken(username, password);
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function authorize(token) {
  try {
    const user = await auth.getUser(token);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}
