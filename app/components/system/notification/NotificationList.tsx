import { SafeAreaView, StyleSheet } from 'react-native';
import NotificationItem from './NotificationItem';
import Colors from '@/app/constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';

export default function NotificationList() {
    const notifications = useSelector((state: RootState) => state.notifications.notifications);
    const dispatch: AppDispatch = useDispatch();

    return (
        <SafeAreaView>
            {
                notifications.map((notification, index) => (
                    <NotificationItem 
                        key={index}
                        notification={notification}
                    />
                ))
            }
        </SafeAreaView>
    );  
}

const style = StyleSheet.create({

})