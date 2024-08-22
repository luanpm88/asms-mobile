import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import NotificationItem from './NotificationItem';
import NotificationServiceImpl from '@/app/services/impl/NotificationServiceImpl';
import NotificationUrlsManager from '@/app/api/NotificationUrlsManager';
import { useEffect, useState } from 'react';
import NotificationDTO from '@/app/dto/NotificationDTO';

export default function NotificationList() {
    const [notifications, setNotifications] = useState<NotificationDTO[]>([]);
    const getNotifications = async () => {
        const notificationService = new NotificationServiceImpl();
        const notifications = await notificationService
                                    .fetchNotificationsByType(NotificationUrlsManager.TYPE_UNREAD);

        setNotifications(notifications);
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
