import AuthUrlsManager from "../api/AuthUrlsManager";
import axios from "../utils/axios";
import { getToken, setToken } from "./TokenService";

interface CredentialsProps {
  
  email: string, 
  password: string, 
  device_name: string
}

export async function login(credentials: CredentialsProps) {
  const { data } = await axios.post(AuthUrlsManager.LOGIN_SUFFIX, credentials);

  await setToken(data.token);
}

export async function loadUser() {
  const token = await getToken();
  const { data: user } = await axios.get(AuthUrlsManager.USER_SUFFIX, {
  });

  return user;
}

export async function logout() {
  const token = await getToken();
  const response = await axios.post(AuthUrlsManager.LOGOUT_SUFFIX, {}, {
  })

  await setToken(null);
}
  