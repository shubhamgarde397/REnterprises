import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallsService } from '../../../common/services/ApiCalls/ApiCalls.service';
import { subcategory } from '../sub-category-add/subcategory';
import { Consts } from "../../../common/constants/const";
import { FormsModule } from "@angular/forms";
import { Location } from '@angular/common';
import { HandleDataService } from '../../../common/services/Data/handle-data.service';

@Component({
  selector: 'app-sub-category-update',
  templateUrl: './sub-category-update.component.html',
  styleUrls: ['./sub-category-update.component.css'],
  providers: [ApiCallsService]
})
export class SubCategoryUpdateComponent implements OnInit {
  myFormGroup: FormGroup;
  model: subcategory;//mapped it to a variable
  modelSubmitted: subcategory;
  submitted = false;
  public categorylist: any;
  response: any;
  category: string;
  subCategory: string;

  constructor(
    public router: Router,
    public handleservice: ApiCallsService,
    public apiCallservice: ApiCallsService,
    public formBuilder: FormBuilder,
    public _location: Location,
    public handledata: HandleDataService
  ) { }

  ngOnInit() {

    this.model = new subcategory(this.category, this.subCategory);
    this.myFormGroup = this.formBuilder.group({
      category: [this.handledata.Data.category, Validators.required],
      subCategory: [this.handledata.Data.subCategory, Validators.required]
    });
    this.category = this.handledata.Data.category;

    this.apiCallservice.handleData('Category/getCategory', 0, 0)
      .subscribe((res: Response) => {
        this.categorylist = res.json();
      });
  }

  change = function (data) {
    data.value.id = this.handledata.Data._id;
    this.apiCallservice.handleData('SubCategory/updateSubCategory', 3, 0, data.value)
      .subscribe((response: Response) => {
        this.show = !this.show;
        this._location.back();
      });
  };
}
