import ApiUrlsManager from "./ApiUrlsManager";

class NotificationUrlsManager extends ApiUrlsManager {

    public static readonly TYPE_ALL = "all";
    public static readonly TYPE_UNREAD = "unread";
    public static readonly INDEX_SUFFIX = "/";

    public static getNotifications(type: string = this.TYPE_ALL): string {
        if (type === this.TYPE_ALL) {
            console.log(1);
            return this.BASE_URL + this.INDEX_SUFFIX;
        } else {
            console.log(`${this.BASE_URL}${this.INDEX_SUFFIX}?type=${type}`);
            return `${this.BASE_URL}${this.INDEX_SUFFIX}?type=${type}`;
        }
    }
}

export default NotificationUrlsManager;