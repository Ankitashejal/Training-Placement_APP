import { Component } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public alertButtons = ['OK'];
  constructor(public data: DataService) {}
  saveTotal(){
      console.log('thisis form');
  }

  openFile(input: any){
    input.click();
    input.addEventListener("change", ()=> {
      this.data.saveFileName(input.files[0].name);
    })
  }
}
