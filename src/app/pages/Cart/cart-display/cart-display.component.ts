import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../../common/services/ApiCalls/ApiCalls.service';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { HandleDataService } from '../../../common/services/Data/handle-data.service';
import { handleFunction } from '../../../common/services/functions/handleFunctions';

@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.css']
})
export class CartDisplayComponent implements OnInit {
  example: any;
  private villageslist;
  private show = false;
  private found;
  private arr;

  constructor(private apiCallservice: ApiCallsService, private router: Router, private handledata: HandleDataService) { }

  fetchData = function () {
    this.apiCallservice.handleData('Cart/getCart', 0, 0)
      .subscribe((res: Response) => {
        this.products = res.json();
      });
  }

  getTotal = function () {
    this.apiCallservice.handleData('Cart/getTotal', 0, 0)
      .subscribe((res: Response) => {
        this.result = res.json();
        this.Total = this.result.total;
      });
  }

  delete = function (data) {
    if (confirm('Are you sure?')) {
      this.apiCallservice.handleData('Cart/deleteCart', 2, 1, {}, data._id)
        .subscribe((response: Response) => {
          this.fetchData();
          this.getTotal();
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
    this.getTotal();

  }

}
