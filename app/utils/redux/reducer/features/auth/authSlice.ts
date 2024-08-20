import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string | null;
    isLoading: boolean;
    error: string | null;
};

const initialState: AuthState = {
    token: null,
    isLoading: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: state => {
            state.isLoading = true;
        },
        loginSuccess: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        logout: state => {
            state.token = null;
        }
    }
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;