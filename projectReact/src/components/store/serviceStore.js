import { action, makeObservable, observable, computed, runInAction } from "mobx";

class ServiceStore {
    url = "http://localhost:8787";
    services = [];
    tempServiceData = [
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

    constructor() {
        makeObservable(this, {
            services: observable,
            tempServiceData: observable,
            addServiceData: action,
            sendDataToServer: action,
            getList: action
        });
        this.sendDataToServer();
    }

    async sendDataToServer() {
            this.services = await this.getList();
            for (const service of this.tempServiceData) {
                console.log("הגיע לפור");
                const { id, name, description, price, duration } = service;
                if (!(this.services.find((service) => service.name === name))) {
                    await fetch(this.url + "/service", {
                        method: "POST",
                        headers: { "Content-Type": "application/json", },
                        body: JSON.stringify({ id, name, description, price, duration })
                    });
                }
                else{
                    console.log("error");
                }
            }
      this.tempServiceData = await this.getList();
    }

    async addServiceData(id, name, description, price, duration) {
        console.log("הוספת שירות");
        const res = await fetch(this.url + "/service", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ id, name, description, price, duration })
        });
        if (res.status !== 200) {
            throw new Error('Faild to add service')
        }
        console.log("נוסף שירות");
        this.tempServiceData = await this.getList();
        console.log(this.tempServiceData+" = temp");
    }

    getList = async () => {
        console.log("getServies")
        const services = await fetch("http://localhost:8787/services");
        const data = await services.json();
        return data;
    }
}
export default new ServiceStore();