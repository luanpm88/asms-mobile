import ApiUrlsManager from "./ApiUrlsManager";

class NotificationUrlsManager extends ApiUrlsManager {

    public static readonly TYPE_ALL = "all";
    public static readonly TYPE_UNREAD = "unread";
    public static readonly INDEX_SUFFIX = "/notifications";

    public static getNotifications(type: string = this.TYPE_ALL): string {
        if (type === this.TYPE_ALL) {
            return this.BASE_URL + this.INDEX_SUFFIX;
        } else {
            return `${this.BASE_URL}${this.INDEX_SUFFIX}?type=${type}`;
        }
    }
}

export default NotificationUrlsManager;