import ApiUrls from "../entities/api/ApiUrls";
import axios from "../utils/axios";
import { getToken, setToken } from "./TokenService";

interface CredentialsProps {
  email: string, 
  password: string, 
  device_name: string
}

export async function login(credentials: CredentialsProps) {
  const { data } = await axios.post(ApiUrls.LOGIN_SUFFIX, credentials);

  await setToken(data.token);
}

export async function loadUser() {
  const token = await getToken();
  const { data: user } = await axios.get(ApiUrls.USER_SUFFIX, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return user;
}

export async function logout() {
  const token = await getToken();

  const response = await axios.post(ApiUrls.LOGOUT_SUFFIX, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  await setToken(null);
}
  