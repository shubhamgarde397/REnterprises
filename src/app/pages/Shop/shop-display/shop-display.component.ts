import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../../common/services/ApiCalls/ApiCalls.service';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { HandleDataService } from '../../../common/services/Data/handle-data.service';
import { handleFunction } from '../../../common/services/functions/handleFunctions';

@Component({
  selector: 'app-shop-display',
  templateUrl: './shop-display.component.html',
  styleUrls: ['./shop-display.component.css'],
  providers: [ApiCallsService]
})
export class ShopDisplayComponent implements OnInit {

  realCategories: any[];
  public response: Object;
  public villageslist;
  public show = false;
  public found;
  public arr;
  public quantity: number = 1;
  public quant = 0;
  public categories;

  constructor(
    public apiCallservice: ApiCallsService,
    public router: Router,
    public handledata: HandleDataService
  ) { }

  fetchData = function () {
    this.apiCallservice.handleData('Store/getStore', 0, 0)
      .subscribe((res: Response) => {
        this.categories = res.json();
      });
  }

  addQuantity(value) {
    console.log("add");
    value.quant = value.quant + 1;
    this.arr = { "category": value.category, "subCategory": value.subCategory, "nameOfProduct": value.nameOfProduct, "sellingPrice": value.sellingPrice };
    this.apiCallservice.handleData('Cart/addCart', 1, 0, this.arr)
      .subscribe((x) => {
        this.response = x;
      });
  }

  removeQuantity(value) {
    console.log("rem");
    value.quant = value.quant - 1;
    this.arr = { "category": value.category, "subCategory": value.subCategory, "nameOfProduct": value.nameOfProduct, "sellingPrice": value.sellingPrice };
    this.apiCallservice.handleData('Cart/deleteCart', 1, 0, this.arr)
      .subscribe((x) => {
        this.response = x;
      });
  }

  checkout() {
    // this.realCategories = this.handledata.returnItems(this.categories);
    this.router.navigate(['DashBoard/Cart']);
  }


  ngOnInit() {
    this.fetchData();

  }

}
