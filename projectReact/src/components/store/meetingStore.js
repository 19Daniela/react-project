import { action, makeObservable, observable, computed, runInAction } from 'mobx';

class MeetingStore 
{
    url="http://localhost:8787";
    meetingData = [];
    tempMeetingData = [
        {
            id: 1,
            serviceType: "11",
            dateTime: "2024-02-28T10:00:00.000Z",
            clientName: "Michal ",
            clientPhone: "050-5521451",
            clientEmail: "Michal@gmail.com",
        },
        {
            id: 2,
            serviceType: "5",
            dateTime: "2024-02-29T08:00:00.000Z",
            clientName: "Yuval ",
            clientPhone: "050-55474451",
            clientEmail: "Yuval@gmail.com",
        }
    ];

    constructor() {
        makeObservable(this, {
            meetingData: observable,
            tempMeetingData: observable,
            initData: action,
            addMeeting: action,
            getList: action
        });
        this.initData();
    }

    initData(){
        this.tempMeetingData.map(x=> this.addMeeting(x));
    }

    async addMeeting(meeting){
        this.tempMeetingData = [...this.tempMeetingData, {meeting}];
    }

    async getList() {
        console.log("getAppiontments")
        const res = await fetch(this.url+"/appointments");
        runInAction(()=>{
            const data = res.json();
            ([...data].sort((a,b)=> new Date(a.dateTime)- new Date(b.dateTime)));
        })

        // this.tempMeetingData = ([...data]
        //     // .sort((x, y) => new Date(y.dateTime) - new Date(x.dateTime))
        //     );
    }
}
export default new MeetingStore();