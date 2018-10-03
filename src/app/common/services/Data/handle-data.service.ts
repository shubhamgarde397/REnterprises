import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {
  public Data;
  public DataArray = {};
  public message = new Subject<string>();

  constructor() { }

  saveData(data) {
    this.Data = data;
    console.log("in service", this.Data);
  }
}
