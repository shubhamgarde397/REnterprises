import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../../common/services/ApiCalls/ApiCalls.service';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { HandleDataService } from '../../../common/services/Data/handle-data.service';

@Component({
  selector: 'app-new-product-display',
  templateUrl: './new-product-display.component.html',
  styleUrls: ['./new-product-display.component.css']
})
export class NewProductDisplayComponent implements OnInit {
  example: any;
  private villageslist;
  private show = false;
  private found;
  private arr;

  constructor(private apiCallservice: ApiCallsService, private router: Router, private handledata: HandleDataService) { }

  fetchData = function () {
    this.apiCallservice.handleData('NewProduct/getNewProduct', 0, 0)
      .subscribe((res: Response) => {
        this.categories = res.json();
      });
  }

  delete = function (id) {
    if (confirm('Are you sure?')) {
      this.apiCallservice.handleData('NewProduct/deleteNewProduct', 2, 1, {}, id)
        .subscribe((response: Response) => {
          this.fetchData();
        });
    }
  };

  showDatabyid(yo) {
    this.handledata.saveData(yo);
    this.show = true;
    this.router.navigate(['DashBoard/Information/NewProduct_Handler/NewProductUpdate']);
  }

  ngOnInit() {
    this.fetchData();

  }

}
