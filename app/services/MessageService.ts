import MessageDTO from "../dto/MessageDTO";

export interface MessageService {
    fetchMessages(userId: number): Promise<MessageDTO[]>;
    sendMessage(messageData: {
        sender_id: number;
        receiver_id: number;
        content: string;
    }): Promise<void>;
}
