import { action, makeObservable, observable, computed, runInAction } from 'mobx';

class MeetingStore {
    url = "http://localhost:8787";
    count = 0;
    meetingData = [];
    meetings = [];
    tempMeetingData = [
        {
            id: 1,
            serviceType: "Criminal Lawyer",
            dateTime: "2024-03-28 10:00",
            clientName: "Michal ",
            clientPhone: "050-5521451",
            clientEmail: "Michal@gmail.com",
        },
        {
            id: 2,
            serviceType: "Execution lawyer",
            dateTime: "2024-02-29 08:00",
            clientName: "Yuval ",
            clientPhone: "050-55474451",
            clientEmail: "Yuval@gmail.com",
        }
    ];

    constructor() {
        makeObservable(this, {
            meetingData: observable,
            // tempMeetingData: observable,
            meetings: observable,
            addMeeting: action,
            sendDataToServer: action,
            getList: action
        });
        this.sendDataToServer();
    }

    async sendDataToServer() {
        this.meetings = await this.getList();
        for (const meeting of this.tempMeetingData) {
            const { id, serviceType, dateTime, clientName, clientPhone, clientEmail } = meeting;
            if (!this.meetings.find((meeting) => meeting.dateTime === dateTime)) {
                const res = await fetch(this.url + "/appointment", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", },
                    body: JSON.stringify({ id, serviceType, dateTime, clientName, clientPhone, clientEmail })
                });
                if (res.status !== 200) {
                    throw new Error('Failed to add meeting')
                }
            }
        }
       this.tempMeetingData = await this.getList();
    }

    async addMeeting(id, serviceType, dateTime, clientName, clientPhone, clientEmail) {
        const res = await fetch(this.url + "/appointment", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ id, serviceType, dateTime, clientName, clientPhone, clientEmail })
        }); 
        if (res.status !== 200) {
            throw new Error('Faild to add meeting')
        }
        this.tempMeetingData = await this.getList();
    }

    async getList() {
        console.log("getappointments");
        const res = await fetch(this.url + "/appointments");
        const data = await res.json();
        return data;  
    }
}
export default new MeetingStore();