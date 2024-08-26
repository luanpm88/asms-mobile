import ASMSApiClient from "../../utils/ASMSApiClient";
import MessageUrlsManager from "../../api/MessageUrlsManager";
import MessageDTO from "../../dto/MessageDTO";
import { MessageService } from "../MessageService";

class MessageServiceImpl implements MessageService {

    async fetchMessages(userId: number): Promise<MessageDTO[]> {
        const url = MessageUrlsManager.getMessagesUrl(userId);
        // console.log('Fetching from URL:', url);

        try {
            const response = await ASMSApiClient.get(url);
            // console.log('Response:', response);
            const messages = response.data.map((message: any) => new MessageDTO(message));
            return messages;
        } catch (error) {
            console.error('Error fetching messages:', error);
            throw error;
        }
    }

    async sendMessage(messageData: {
        sender_id: number;
        receiver_id: number;
        content: string;
    }): Promise<void> {
        const url = MessageUrlsManager.getSendMessageUrl();
        console.log('Send from URL:', url);
        console.log('Message data:', messageData);

        try {
            await ASMSApiClient.post(url, messageData);
        } catch (error) {
            console.error('Error sending message:', error);
            throw error; 
        }
    }
    
}

export default MessageServiceImpl;
