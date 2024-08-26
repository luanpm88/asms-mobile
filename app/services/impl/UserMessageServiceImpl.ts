import ASMSApiClient from "../../utils/ASMSApiClient";
import UserMessageUrlsManager from "../../api/UserMessageUrlsManager";
import UserMessageDTO from "../../dto/UserMessageDTO";
import { UserMessageService } from "../UserMessageService";

class UserMessageServiceImpl implements UserMessageService {

    async fetchUserMessages(): Promise<UserMessageDTO[]> {
        const url = UserMessageUrlsManager.getUserMessages();
        // console.log('Fetching from URL:', url);

        try {
            const { data } = await ASMSApiClient.get(UserMessageUrlsManager.getUserMessages());
            // console.log('Fetched data:', data); 
            const usersArray = Object.values(data.receivers);

        return usersArray.map((user: any) => new UserMessageDTO(user));
        } catch (error) {
            console.error('Error fetching user messages:', error);
            return [];
        }
    }
    
}

export default UserMessageServiceImpl;
