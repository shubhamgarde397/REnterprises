import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../../common/services/ApiCalls/ApiCalls.service';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { HandleDataService } from '../../../common/services/Data/handle-data.service';

@Component({
  selector: 'app-sub-category-display',
  templateUrl: './sub-category-display.component.html',
  styleUrls: ['./sub-category-display.component.css']
})
export class SubCategoryDisplayComponent implements OnInit {
  example: any;
  public villageslist;
  public show = false;
  public found;
  public arr;
  public subcategories: any;
  constructor(public apiCallservice: ApiCallsService, public router: Router, public handledata: HandleDataService) { }

  fetchData = function () {
    this.apiCallservice.handleData('SubCategory/getSubCategory', 0, 0)
      .subscribe((res: Response) => {
        this.subcategories = res.json();
      });
  }

  deleteSubCategory = function (id) {
    if (confirm('Are you sure?')) {
      this.apiCallservice.handleData('SubCategory/deleteSubCategory', 2, 1, {}, id)
        .subscribe((response: Response) => {
          this.fetchData();
        });
    }
  };

  showDatabyid(yo) {
    this.handledata.saveData(yo);
    this.show = true;
    this.router.navigate(['DashBoard/Information/SubCategory_Handler/SubCategoryUpdate']);
  }

  ngOnInit() {
    this.fetchData();

  }

}
