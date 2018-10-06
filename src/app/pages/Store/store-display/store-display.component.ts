import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../../common/services/ApiCalls/ApiCalls.service';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { HandleDataService } from '../../../common/services/Data/handle-data.service';
import { handleFunction } from '../../../common/services/functions/handleFunctions';

@Component({
  selector: 'app-store-display',
  templateUrl: './store-display.component.html',
  styleUrls: ['./store-display.component.css']
})
export class StoreDisplayComponent implements OnInit {
  example: any;
  public storedata: any;

  constructor(public apiCallservice: ApiCallsService, public router: Router, public handledata: HandleDataService) { }

  fetchData = function () {
    this.apiCallservice.handleData('Store/getStore', 0, 0)
      .subscribe((res: Response) => {
        this.storedata = res.json();
      });
  }

  ngOnInit() {
    this.fetchData();
  }
}
