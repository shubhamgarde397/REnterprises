import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {
  public Data = null;
  public DataArray = [];
  public message = new Subject<string>();

  constructor() { }

  saveData(data) {
    this.Data = data;
    this.DataArray = [];
    console.log(this.Data);
  }



  returnItems(data) {
    data.forEach((element, index) => {
      if (element.quant != 0) {
        this.DataArray.push(element);
      }
    });
    return this.DataArray;
  }
}
