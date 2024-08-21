import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import NotificationItem from './NotificationItem';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/utils/redux/store/store';

export default function NotificationList() {
    const notifications = useSelector((state: RootState) => state.notifications.notifications);

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
    text: {
        fontSize: 18,
        marginBottom: 16,
    },
})