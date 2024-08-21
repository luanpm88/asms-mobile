import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import AuthUrlsManager from '@/app/api/AuthUrlsManager';
import axios from 'axios';

interface AuthState {
    tokenKey: string,
    isLoading: boolean;
    errorMessage: string | null;
};

const initialState: AuthState = {
    tokenKey: "authToken",
    isLoading: false,
    errorMessage: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: state => {
            state.isLoading = true;
        },
        loginSuccess: (state, action: PayloadAction<string>) => {
            AsyncStorage.setItem(state.tokenKey, action.payload);
            state.isLoading = false;
            state.errorMessage = null;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
            Alert.alert(state.errorMessage);
        },
        logoutSuccess: state => {
            state.isLoading = false;
            state.errorMessage = null;
        },
    },
});

export const logout = createAsyncThunk('auth/logout', async(_, { dispatch }) => {
    try {
        const token = await AsyncStorage.getItem('authToken');
        const response = await axios.post(AuthUrlsManager.getLogOutUrl(), {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.data.status === 200) {
            await AsyncStorage.removeItem('authToken');
            dispatch(authSlice.actions.logoutSuccess());
        } else {
            throw new Error('Logout failed on server!');
        }
    } catch (error) {
        Alert.alert("Có lỗi xảy ra khi đăng xuất!");
        console.error('Logout error: ', error);
    }
});

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;
export const authActions = authSlice.actions;
export default authSlice.reducer;