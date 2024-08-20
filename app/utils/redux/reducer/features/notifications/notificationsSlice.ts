import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '@/app/utils/redux/store/store';
import NotificationClass from '@/app/entities/Notification';

interface NotificationState {
    notifications: NotificationClass[];
}

const initialState: NotificationState = {
    notifications: [],
};

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        setNotifications: (state, action: PayloadAction<NotificationClass[]>) => {
            state.notifications = action.payload;
        },
        addNotification: (state, action: PayloadAction<NotificationClass>) => {
            state.notifications.push(action.payload);
        },
        removeNotification: (state, action: PayloadAction<number>) => {
            state.notifications = state.notifications.filter((_, index) => index !== action.payload);
        },
    },
});

export const { setNotifications, addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;

export const populateTestNotifications = () => (dispatch: AppDispatch) => {
    const notifications = [
        {
            title: "Sổ liên lạc điện tử",
            date: "07/08/2024",
            info: "Thông tin sổ liên lạc điện tử ngày 07/08 đã được cập nhật.",
        },
        {
            title: "Sổ liên lạc điện tử",
            date: "09/08/2024",
            info: "Thông tin sổ liên lạc điện tử ngày 09/08 đã được cập nhật.",
        },
        {
            title: "Sổ liên lạc điện tử",
            date: "10/08/2024",
            info: "Thông tin sổ liên lạc điện tử ngày 10/08 đã được cập nhật.",
        },
        
    ];

    notifications.forEach(notification => dispatch(addNotification(notification)));
};
