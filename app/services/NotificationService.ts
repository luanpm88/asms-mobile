import NotificationDTO from "../dto/NotificationDTO";

export interface NotificationService {
    fetchNotificationsByType(type: string): Promise<NotificationDTO[]>;
}