class Notification {
    title: string;
    date: string;
    info: string;
    titleIcon?: React.ReactNode;
    timeIcon?: React.ReactNode;

    constructor(title: string, date: string, info: string, titleIcon?: React.ReactNode, timeIcon?: React.ReactNode) {
        this.title = title;
        this.date = date;
        this.info = info;
        this.titleIcon = titleIcon;
        this.timeIcon = timeIcon;
    }
}

export default Notification;