import { htmlToText } from 'html-to-text';
import { format } from 'date-fns';

export default class NotificationDTO {
    id: string;
    type: string;
    notifiableType: string;
    notifiableId: number;
    name: string;
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
        this.name = data.data.name || "Thông báo";
        this.message = this.cleanMessage(data.data.message);
        this.readAt = data.read_at;
        this.createdAt = this.formatDate(data.created_at);
        this.updatedAt = this.formatDate(data.updated_at);
        this.pushed = data.pushed;
    }

    private cleanMessage(html: string): string {
        return htmlToText(html, {
            wordwrap: 130
        });
    }

    private formatDate(dateString: string): string {
        const date = new Date(dateString);
        return format(date, 'MMMM dd, yyyy hh:mm a');
    }
}
