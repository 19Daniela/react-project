import { makeObservable, observable, action, computed, runInAction } from 'mobx';

class Store 
{
  url = "http://localhost:8787/businessData";
  isLogin=false;
  flag= true;
  degel= false;
  businessData = {};
  tempBusinessData = {
    name: "Low Firm",
    address: "Moshe Levi, St.11 Rishon le Siyon.",
    phone: "03-5526533",
    owner: "Lirom Levi",
    logo: "../src/assets/logo.png",
    description: " The trustfull lawyers office",
  }

  constructor() {
    makeObservable(this, {
      businessData: observable,
      isLogin: observable,
      flag: observable,
      saveLogin: action,
      setDetails: action,
      getList: action
    });
     this.initData();   
  }

  async initData()
  {
    try
      {
        const res = await fetch(url);
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

  async saveDetails(name, address, phone, owner, description){
      await fetch(this.url,{
      method:"POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({name, address, phone, owner, description})
    });
     this.getList();
  }

  async saveLogin(name, password)
  {
    const res = await fetch("http://localhost:8787/login",{
      method:"POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({name, password})
   });
    console.log({name, password});
    runInAction(()=>{
      if(res.status === 200){
        this.isLogin=true;
        this.degel=true;
      }
      else
       this.flag=false;
    console.log(res.status+"status");
    })
  }

  // get getList(){
  //   console.log(this.tempBusinessData);
  //   return this.tempBusinessData;
  // }

  async getList(){
    const res = await fetch("http://localhost:8787/businessData");
    const data= await res.json();
    this.setDetails(data);
    console.log(data);
  }

  setDetails(value){
    this.tempBusinessData=value;
  }
}
export default new Store();

