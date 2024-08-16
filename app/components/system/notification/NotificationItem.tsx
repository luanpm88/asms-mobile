import { View, Text, StyleSheet } from 'react-native';
import Notification from '@/app/entities/Notification';

interface NotificationProps {
    notification: Notification;
    onDelete?: () => void;
}

const NotificationItem: React.FC<NotificationProps> = ({notification, onDelete}) => {
    return (
        <View>
            <View>
                {notification.titleIcon}
                <Text>{notification.title}</Text>
            </View>
            <View>
                {notification.timeIcon}
                <Text>{notification.date}</Text>
            </View>
            <Text>{notification.info}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default NotificationItem;