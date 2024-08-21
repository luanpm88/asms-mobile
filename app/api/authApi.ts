import ApiUrls from "../entities/api/ApiUrls";
import { getToken } from "../storage/tokenStorage";

export const login = async (email: string, password: string) => {
    try {
        const formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);

        const response = await fetch(ApiUrls.getLoginUrl(), {
            method: "POST",
            body: formdata,
            headers: {
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); 

        return result; 
    } catch (error) {
        console.error('Login API error:', error); 
        throw error;
    }
}

export const logout = async () => {
    try {
        const token = await getToken(); 

        const response = await fetch(ApiUrls.getLogOutUrl(), {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log('Logout successful');
        return true;
    } catch (error) {
        console.error('Logout API error:', error);
        throw error;
    }
};
