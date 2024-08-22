export interface TokenService {
    setToken(newToken: string | null): Promise<void>;
    getToken(): Promise<string | null>;
}
