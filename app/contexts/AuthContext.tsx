import React, { createContext, useEffect, useState } from 'react';
import { getToken, removeToken, storeToken } from '../storage/tokenStorage';
import { login, logout } from '../api/authApi';

interface AuthContextProps {
    user: any;
    loginUser: (email: string, password: string) => Promise<void>;
    logoutUser: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<{ token: string } | null>(null);

    useEffect(() => {
        const loadUserFromStorage = async () => {
            const token = await getToken();

            if (token) {
                // Fetch user details from backend if necessary
                setUser({ token });
            }
        };

        loadUserFromStorage();
    }, []);

    const loginUser = async (email: string, password: string) => {
        const { token } = await login(email, password);
        await storeToken(token);
        setUser({ token });
    }

    const logoutUser = async () => {
        await logout();
        await removeToken();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
            { children }
        </AuthContext.Provider>
    );
};