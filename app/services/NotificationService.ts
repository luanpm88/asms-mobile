import axios from "../utils/axios";
import NotificationUrlsManager from "../api/NotificationUrlsManager";

export async function getAll() {
    const { data } = await axios.get(NotificationUrlsManager.getNotifications());

    return data;
}