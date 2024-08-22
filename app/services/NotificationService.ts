import ASMSApiClient from "../utils/ASMSApiClient";
import NotificationUrlsManager from "../api/NotificationUrlsManager";
import NotificationDTO from "../dto/NotificationDTO";

class NotificationService {

    static async fetchNotificationsByType(type: string = NotificationUrlsManager.TYPE_ALL): Promise<NotificationDTO[]> {
        const { data } = await ASMSApiClient.get(NotificationUrlsManager.getNotifications(type));

        return data.notifications.map((notification: any) => new NotificationDTO(notification));
    }
}

export default NotificationService;
