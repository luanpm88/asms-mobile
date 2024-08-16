import { View } from 'react-native';
import Conversation from '@/app/components/message/Conversation';

export default function Message() {
    return (
        <View style={{ flex: 1 }}>
            <Conversation />
        </View>
    );
}