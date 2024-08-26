import { htmlToText } from 'html-to-text';
import { parseISO } from 'date-fns';

export default class MessageDTO {
    id: number;
    content: string;
    created_at: Date;
    sender_id: number;
    receiver_id: number;

    constructor(data: any) {
        this.id = data.id;
        this.content = data.content;
        this.created_at = parseISO(data.created_at); 
        this.sender_id = data.sender_id;
        this.receiver_id = data.receiver_id;
    }

}
