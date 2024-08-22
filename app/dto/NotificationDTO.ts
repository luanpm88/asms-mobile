export default class NotificationDTO {
    id: string;
    type: string;
    notifiableType: string;
    notifiableId: number;
    message: string;
    readAt: string | null;
    createdAt: string;
    updatedAt: string;
    pushed: number;

    constructor(data: any) {
        this.id = data.id;
        this.type = data.type;
        this.notifiableType = data.notifiable_type;
        this.notifiableId = data.notifiable_id;
        this.message = data.data.message;
        this.readAt = data.read_at;
        this.createdAt = data.created_at;
        this.updatedAt = data.updated_at;
        this.pushed = data.pushed;
    }
}
