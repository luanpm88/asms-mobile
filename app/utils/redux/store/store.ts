import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from '../reducer/features/notifications/notificationsSlice';
import authReducer from '../reducer/features/auth/authSlice';

export const store = configureStore({
    reducer: {
        notifications: notificationsReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
