import ApiUrlsManager from "./ApiUrlsManager";

class MessageUrlsManager extends ApiUrlsManager {

    public static readonly MESSAGES_SUFFIX = '/messages';
    public static readonly SEND_MESSAGE_SUFFIX = '/send-messages';

    public static getMessagesUrl(userId: number): string {
        return `${this.BASE_URL}${this.MESSAGES_SUFFIX}/${userId}`;
    }

    public static getSendMessageUrl(): string {
        return `${this.BASE_URL}${this.SEND_MESSAGE_SUFFIX}`;
    }
}

export default MessageUrlsManager;
