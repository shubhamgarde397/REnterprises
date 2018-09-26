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
  response: Object;
  example: any;
  private villageslist;
  private show = false;
  private found;
  private arr;
  private quantity: number = 1;

  constructor(private apiCallservice: ApiCallsService, private router: Router, private handledata: HandleDataService) { }

  fetchData = function () {
    this.apiCallservice.handleData('NewProduct/getNewProduct', 0, 0)
      .subscribe((res: Response) => {
        this.categories = res.json();
      });
  }

  add(value) {

    this.arr = { "category": value.category, "subCategory": value.subCategory, "nameOfProduct": value.nameOfProduct, "sellingPrice": value.sellingPrice };
    this.apiCallservice.handleData('Cart/addCart', 1, 0, this.arr)
      .subscribe((x) => {
        this.response = x;
      });
  }

  ngOnInit() {
    this.fetchData();

  }

}