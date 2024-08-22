import { AuthCredentialsProps } from "./props/AuthCredentialsProps";

export interface IAuthService {
    login(credentials: AuthCredentialsProps): Promise<void>;
    loadUser(): Promise<any>;
    logout(): Promise<void>;
}
