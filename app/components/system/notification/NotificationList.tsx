import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import NotificationItem from './NotificationItem';
import NotificationService from '@/app/services/NotificationService';
import NotificationUrlsManager from '@/app/api/NotificationUrlsManager';
import { useEffect, useState } from 'react';
import NotificationDTO from '@/app/dto/NotificationDTO';

export default function NotificationList() {
    const [notifications, setNotifications] = useState<NotificationDTO[]>([]);

    const getNotifications = async () => {
        const response = await NotificationService.fetchNotificationsByType(NotificationUrlsManager.TYPE_UNREAD);
        const notificationsData = response.map((data: any) => new NotificationDTO(data));

        setNotifications(notificationsData);
    };

    useEffect(() => {
        getNotifications();
    }, []);

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {
                    notifications.map((notification, index) => (
                        <NotificationItem 
                            key={index}
                            notification={notification}
                        />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    scrollViewContent: {
        padding: 16,
    },
});
