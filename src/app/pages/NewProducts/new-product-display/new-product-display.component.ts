import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../../common/services/ApiCalls/ApiCalls.service';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { HandleDataService } from '../../../common/services/Data/handle-data.service';
import { handleFunction } from '../../../common/services/functions/handleFunctions';

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

  delete = function (data) {
    if (confirm('Are you sure?')) {
      this.apiCallservice.handleData('NewProduct/deleteNewProduct', 2, 1, {}, data.id)
        .subscribe((response: Response) => {
          this.fetchData();
        });
      this.valueStore = { 'category': data.category, 'subCategory': data.subCategory, 'nameOfProduct': data.nameOfProduct, 'quantity': data.quantity }
      console.log(this.valueStore);

      this.handleservice.handleData('Store/deleteStore', 2, 1, this.valueStore)//delete from here
        .subscribe((x) => {
          this.response = x;
          this._location.back();
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
