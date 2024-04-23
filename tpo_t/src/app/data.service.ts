import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  name: string = "Register First";
  email: string = "Register First";
  contact: string = "Register First";
  rollNo: string  = "Register First";
  resumeName: string = "Register First";

  hscCollegeName: string = "";
  hscyearOfpassing: string = "";
  hscTotal: string = "";
  hscOutOf: string = "";

  sscCollegeName: string = "";
  sscyearOfpassing: string = "";
  sscTotal: string = "";
  sscOutOf: string = "";

  saveFileName(fileName: string){
    this.resumeName = fileName;
  }

  saveData(name: string, email:string, contact: string, rollNo: string,
    hscCollegeName: string, hscyearOfPassing: string, hsctotal: string, hscoutOf: string,
    sscCollegeName: string, sscyearOfPassing: string, ssctotal: string, sscoutOf: string
    ){
    this.name = name;
    this.email = email;
    this.contact = contact;
    this.rollNo = rollNo;

    this.hscCollegeName = hscCollegeName;
    this.hscyearOfpassing = hscyearOfPassing;
    this.hscTotal = hsctotal;
    this.hscOutOf = hscoutOf;

    this.sscCollegeName = sscCollegeName;
    this.sscyearOfpassing = sscyearOfPassing;
    this.sscTotal = ssctotal;
    this.sscOutOf = sscoutOf;

    console.log(this.name, this.email, this.contact, this.rollNo);
    console.log(this.hscCollegeName, this.hscyearOfpassing, this.hscTotal, this.hscOutOf);
    console.log(this.sscCollegeName, this.sscyearOfpassing, this.sscTotal, this.sscOutOf);
  }

}