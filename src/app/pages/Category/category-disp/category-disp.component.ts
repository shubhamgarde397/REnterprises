import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../../common/services/ApiCalls/ApiCalls.service';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { HandleDataService } from '../../../common/services/Data/handle-data.service';

@Component({
  selector: 'app-category-disp',
  templateUrl: './category-disp.component.html',
  styleUrls: ['./category-disp.component.css'],
  providers: [ApiCallsService]
})
export class CategoryDispComponent implements OnInit {
  example: any;
  public villageslist;
  public show = false;
  public found;
  public arr;
  public categories: any;

  constructor(public apiCallservice: ApiCallsService, public router: Router, public handledata: HandleDataService) { }

  fetchData = function () {
    this.apiCallservice.handleData('Category/getCategory', 0, 0)
      .subscribe((res: Response) => {
        this.categories = res.json();
      });
  }

  deleteCategory = function (id) {
    if (confirm('Are you sure?')) {
      this.apiCallservice.handleData('Category/deleteCategory', 2, 1, {}, id)
        .subscribe((response: Response) => {
          this.fetchData();
        });
    }
  };

  showDatabyid(yo) {
    this.handledata.saveData(yo);
    this.show = true;
    this.router.navigate(['DashBoard/Information/Category_Handler/CategoryUpdate']);
  }

  ngOnInit() {
    this.fetchData();

  }

}
