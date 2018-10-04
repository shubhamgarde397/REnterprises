import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../../common/services/ApiCalls/ApiCalls.service';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { HandleDataService } from '../../../common/services/Data/handle-data.service';
import { handleFunction } from '../../../common/services/functions/handleFunctions';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Subscription } from 'rxjs';

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
  newAuthor: any;
  public subscription: Subscription;
  public message: string;
  private checkoutButton = false;

  constructor(private apiCallservice: ApiCallsService, private router: Router, private handledata: HandleDataService) { }

  fetchData = function () {
    if (this.handledata.Data) {
      this.checkoutButton = true;
      this.products = this.handledata.Data;
    }
    else {
      this.checkoutButton = false;
      this.products = this.handledata.Data;
    }

  }

  getTotal = function () {
    this.apiCallservice.handleData('Cart/getTotal', 0, 0)
      .subscribe((res: Response) => {
        this.result = res.json();
        // this.Total = this.result.total;
      });
  }

  delete = function (data) {
    if (confirm('Are you sure?')) {
      this.apiCallservice.handleData('Cart/deleteCart', 2, 1, {}, data._id)
        .subscribe((response: Response) => {
          this.fetchData();
          // this.getTotal();
        });
    }
  };

  showDatabyid(yo) {
    this.handledata.saveData(yo);
    this.show = true;
    this.router.navigate(['DashBoard/Information/NewProduct_Handler/NewProductUpdate']);
  }

  checkout() {
    this.apiCallservice.handleData('Cart/getCart', 0, 0)
      .subscribe((res: Response) => {
        this.newAuthor = res.json();
        var rows = [];
        var columns = [
          { title: "Category", dataKey: "category" },
          { title: "SubCategory", dataKey: "subCategory" },
          { title: "Name", dataKey: "nameOfProduct" },
          { title: "Quantity", dataKey: "quantity" },
          { title: "Price", dataKey: "sellingPrice" },
        ];
        var doc = new jsPDF({
          orientation: 'landscape',
          unit: 'in',
          format: [15, 10]
        });
        doc.setFontSize(40)
        doc.setFont('Arial');
        doc.setFontType('bold');
        doc.setTextColor(255, 0, 0)
        doc.setLineWidth(0.1)
        doc.line(0, 2.2, 15, 2.2)
        // var doc = new jsPDF('p', 'pt');
        doc.setFontSize(60)
        doc.setTextColor(0, 0, 0)
        doc.setLineWidth(0.1)
        doc.line(0, 4.2, 15, 4.2)
        doc.setFontSize(16);

        doc.addPage();
        var i = 1;
        for (var key in this.newAuthor) {
          rows = [...rows, Object.assign({}, {
            "category": this.newAuthor[key].category,
            "subCategory": this.newAuthor[key].subCategory,
            "nameOfProduct": this.newAuthor[key].nameOfProduct,
            "quantity": this.newAuthor[key].quantity,
            "sellingPrice": this.newAuthor[key].sellingPrice
          })];
          i++;
        }
        doc.autoTable(columns, rows);
        doc.save("new.pdf");
        this.apiCallservice.handleData('Cart/deleteCartFull', 2, 0)
          .subscribe((res) => {
            this.router.navigate(['DashBoard/Information/Shop_Handler/ShopDisplay']);
          })
      });
  }

  ngOnInit() {
    this.fetchData();
    // this.getTotal();

  }
}
