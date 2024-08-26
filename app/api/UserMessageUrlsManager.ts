import ApiUrlsManager from "./ApiUrlsManager";

class UserMessageUrlsManager extends ApiUrlsManager {

    public static readonly INDEX_SUFFIX = "/messages";

    public static getUserMessages(): string {
        return this.BASE_URL + this.INDEX_SUFFIX;
    }
}

export default UserMessageUrlsManager;
