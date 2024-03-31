import { action, makeObservable, observable, computed, runInAction } from "mobx";

class ServiceStore
{
    url="http://localhost:8787";
    serviceData=[];
    tempServiceDate=[
        {
            id: 1,
            name: "Family Lawyer",
            description: "An honest lawyer who takes every case very seriously",
            price: 3000,
            duration: 80,
        },
        {
            id: 2,
            name: "Criminal Lawyer",
            description: "The best criminal lawyer will help you in any way he can",
            price: 2500,
            duration: 60,
        },
        {
            id: 3,
            name: "Execution lawyer",
            description: "The lawyer will help in any way he can to make sure you will get any thing you won",
            price: 2500,
            duration: 60,
        }
    ];

    constructor(){
        makeObservable(this,{
            serviceData: observable,
            tempServiceDate: observable,
            initData: action,
            addServiceData: action,
            getList: action
        });
        this.initData();
    }

    // initData(){
    //     this.tempServiceDate.map(x=> this.addServiceData(x));
    // }

    async initData()
    {
       try
       {
           const res = await fetch(this.url+"/services");
           const data = await res.json();
           console.log(data)
           runInAction(()=>{
               this.addServiceData(data);
           });
       }
       catch(err)
       {
           console.log(err);
       }
   }

//    async addServiceData(service)
//     {
//         const res= await fetch(this.url+'/service',{
//             method: 'POST',
//             body: JSON.stringify({service}),
//             headers: {"Content-Type": "application/json"}
//         });
//         const data = await res.json();
//         runInAction(() => {
//             if (res.status === 200) 
//                 this.addStatus=true;            
//         })
//         return data;
//     }

    async addServiceData(service){
        this.tempServiceDate = [...this.tempServiceDate, {service}];
    }

    async getList() {
        console.log("getServies");
        const res = await fetch(this.url+"/services");
        const data = await res.json();
        this.tempServiceDate = ([...data]);
    }

    // get getList(){
    //     return this.serviceData;
    // }

    // async getList(){
    //     const res = await fetch(url+"/services");
    //     return res;
    //   }
}
export default new ServiceStore();