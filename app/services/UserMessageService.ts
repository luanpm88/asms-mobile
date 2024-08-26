import UserMessageDTO from "../dto/UserMessageDTO";

export interface UserMessageService {
    fetchUserMessages(): Promise<UserMessageDTO[]>;
}
