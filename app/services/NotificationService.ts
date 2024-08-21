// NotificationService.ts
import ASMSApiClient from "../utils/ASMSApiClient";
import NotificationUrlsManager from "../api/NotificationUrlsManager";

class NotificationService {
    
    static async fetchNotificationsByType(type: string = NotificationUrlsManager.TYPE_ALL) {
        const { data } = await ASMSApiClient.get(NotificationUrlsManager.getNotifications(type));
        return data;
    }
}

export default NotificationService;
