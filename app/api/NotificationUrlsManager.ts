import ApiUrlsManager from "./ApiUrlsManager";

class NotificationUrlsManager extends ApiUrlsManager {
    public static readonly INDEX_SUFFIX = "/";

    public static getNotifications(type: string = "all"): string {
        if (type === "all") {
            return this.BASE_URL + this.INDEX_SUFFIX;
        } else {
            return `${this.BASE_URL}${this.INDEX_SUFFIX}?type=${type}`;
        }
    }
}

export default NotificationUrlsManager;