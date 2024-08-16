import { View, Text, StyleSheet, Pressable, Animated, Dimensions, Easing, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import NotificationList from '@/app/components/system/notification/NotificationList';

export default function Notification() {
    return (
        <View>
            <NotificationList />
        </View>
    );
}