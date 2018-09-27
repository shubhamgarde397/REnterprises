import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallsService } from '../../../common/services/ApiCalls/ApiCalls.service';
import { newproduct } from './newproduct';
import { Consts } from "../../../common/constants/const";
import { FormsModule } from "@angular/forms";
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-product-add',
  templateUrl: './new-product-add.component.html',
  styleUrls: ['./new-product-add.component.css']
})
export class NewProductAddComponent implements OnInit {
  valueStore: {};
  subcategorylist: any;
  myFormGroup: FormGroup;
  model: newproduct;//mapped it to a variable
  modelSubmitted: newproduct;
  submitted = false;
  private categorylist: any;
  response: any;
  category: string;
  subCategory: string;
  private date: string;
  private nameOfProduct: string;
  private quantity: number;
  private costPrice: number;
  private sellingPrice: number;
  private subCategoryToggle: boolean = false;
  private OtherDataToggle: boolean = false;

  constructor(
    private router: Router,
    private handleservice: ApiCallsService,
    private apiCallservice: ApiCallsService,
    private formBuilder: FormBuilder,
    private _location: Location
  ) { }

  ngOnInit() {

    this.model = new newproduct(this.date, this.category, this.subCategory, this.nameOfProduct, this.quantity, this.costPrice, this.sellingPrice);
    this.myFormGroup = this.formBuilder.group({
      date: [this.model.date, Validators.required],
      category: [this.model.category, Validators.required],
      subCategory: [this.model.subCategory, Validators.required],
      nameOfProduct: [this.model.nameOfProduct, Validators.required],
      quantity: [this.model.quantity, Validators.required],
      costPrice: [this.model.costPrice, Validators.required],
      sellingPrice: [this.model.sellingPrice, Validators.required]
    });

    this.apiCallservice.handleData('Category/getCategory', 0, 0)
      .subscribe((res: Response) => {
        this.categorylist = res.json();
      });
  }
  getSubCategories() {
    this.apiCallservice.handleData('SubCategory/getSubCategorybyName', 0, 1, {}, this.myFormGroup.value.category)
      .subscribe((res: Response) => {
        this.subcategorylist = res.json();
        this.subCategoryToggle = true;
      });
  }

  OtherDataToggleFunction() {
    this.OtherDataToggle = true;
  }

  store({ value, valid }: { value: newproduct, valid: boolean }) {
    this.submitted = true;
    this.handleservice.handleData('NewProduct/addNewProduct', 1, 0, value)
      .subscribe((x) => {
        this.response = x;
      });
    this.valueStore = { 'category': value.category, 'subCategory': value.subCategory, 'nameOfProduct': value.nameOfProduct, 'quantity': value.quantity, 'sellingPrice': value.sellingPrice }
    this.handleservice.handleData('Store/addStore', 1, 0, this.valueStore)
      .subscribe((x) => {
        this.response = x;
        this._location.back();
      });
  }
}
