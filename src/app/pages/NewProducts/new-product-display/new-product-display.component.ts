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
  public villageslist;
  public show = false;
  public found;
  public arr;
  public categories: any;

  constructor(public apiCallservice: ApiCallsService, public router: Router, public handledata: HandleDataService) { }

  fetchData = function () {
    this.apiCallservice.handleData('NewProduct/getNewProduct', 0, 0)
      .subscribe((res: Response) => {
        this.categories = res.json();
      });
  }

  delete = function (data) {
    if (confirm('Are you sure?')) {
      this.apiCallservice.handleData('NewProduct/deleteNewProduct', 2, 1, {}, data._id)
        .subscribe((response: Response) => {
          console.log(response);

          this.fetchData();
        });
      this.valueStore = { 'category': data.category, 'subCategory': data.subCategory, 'nameOfProduct': data.nameOfProduct, 'quantity': data.quantity };
      console.log(this.valueStore);

      this.apiCallservice.handleData('Store/deleteStore', 1, 0, this.valueStore)//delete from here
        .subscribe((x) => {
          this.response = x;
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
