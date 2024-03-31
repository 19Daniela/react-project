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

  saveDetails= async(name, address, phone, owner, logo, description)=>
  {
      await fetch(this.url,{
      method:"POST",
      body: JSON.stringify({name, address, phone, owner, logo, description}),
      headers: { "Content-Type": "application/json"},
    });
    this.getList();
    console.log(this.getList());
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

   getList = async()=>{
    const res = await fetch("http://localhost:8787/businessData");
    const data= await res.json();
    this.setDetails(data);
    console.log("data = "+data);
  }

  setDetails(value){
    this.tempBusinessData=value;
  }
}
export default new Store();

