import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import NotificationItem from './NotificationItem';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/utils/redux/store/store';
import NotificationService from '@/app/services/NotificationService';
import NotificationUrlsManager from '@/app/api/NotificationUrlsManager';
import { useEffect } from 'react';

export default function NotificationList() {
    const getNotifications = async function() {
        const notifications = await NotificationService.fetchNotificationsByType(NotificationUrlsManager.TYPE_UNREAD);
        
        console.log(notifications);
    }

    useEffect(() => {
        getNotifications();
    }, [])

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {
                    // notifications.map((notification, index) => (
                    //     <NotificationItem 
                    //         key={index}
                    //         notification={notification}
                    //     />
                    // ))
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
    text: {
        fontSize: 18,
        marginBottom: 16,
    },
})