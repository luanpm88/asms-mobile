import { htmlToText } from 'html-to-text';
import { format } from 'date-fns';

export default class UserMessageDTO {
    id: number;
    name: string;
    email: string;
    lastMessage?: string;
    avatarUrl?: string;
    createdAt?: string;
    updatedAt?: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.lastMessage = data.lastMessage ? this.cleanMessage(data.lastMessage) : undefined;
        this.avatarUrl = data.avatarUrl || null;
        this.createdAt = data.createdAt ? this.formatDate(data.createdAt) : undefined;
        this.updatedAt = data.updatedAt ? this.formatDate(data.updatedAt) : undefined;
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
