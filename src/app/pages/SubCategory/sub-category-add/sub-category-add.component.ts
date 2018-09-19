import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallsService } from '../../../common/services/ApiCalls/ApiCalls.service';
import { subcategory } from './subcategory';
import { Consts } from "../../../common/constants/const";
import { FormsModule } from "@angular/forms";
import { Location } from '@angular/common';

@Component({
  selector: 'app-sub-category-add',
  templateUrl: './sub-category-add.component.html',
  styleUrls: ['./sub-category-add.component.css'],
  providers: [ApiCallsService]
})
export class SubCategoryAddComponent implements OnInit {
  myFormGroup: FormGroup;
  model: subcategory;//mapped it to a variable
  modelSubmitted: subcategory;
  submitted = false;
  private categorylist: any;
  response: any;
  category: string;
  subCategory: string;

  constructor(
    private router: Router,
    private handleservice: ApiCallsService,
    private apiCallservice: ApiCallsService,
    private formBuilder: FormBuilder,
    private _location: Location
  ) { }

  ngOnInit() {

    this.model = new subcategory(this.category, this.subCategory);
    this.myFormGroup = this.formBuilder.group({
      category: [this.model.category, Validators.required],
      subCategory: [this.model.subCategory, Validators.required]
    });

    this.apiCallservice.handleData('Category/getCategory', 0, 0)
      .subscribe((res: Response) => {
        this.categorylist = res.json();
      });
  }

  storeSubCategoryData({ value, valid }: { value: subcategory, valid: boolean }) {
    this.submitted = true;
    this.handleservice.handleData('SubCategory/addsubCategory', 1, 0, value)
      .subscribe((x) => {
        this.response = x;
        this._location.back();
      });
  }
}
