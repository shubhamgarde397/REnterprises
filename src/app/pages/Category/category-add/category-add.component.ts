import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallsService } from '../../../common/services/ApiCalls/ApiCalls.service';
import { category } from './category';
import { Consts } from "../../../common/constants/const";
import { FormsModule } from "@angular/forms";
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
  providers: [ApiCallsService]
})
export class CategoryAddComponent implements OnInit {
  myFormGroup: FormGroup;
  model: category;//mapped it to a variable
  modelSubmitted: category;
  submitted = false;
  private categorylist: any;

  response: any;

  constructor(private router: Router, private apiCallservice: ApiCallsService, private http: Http, private formBuilder: FormBuilder, private _location: Location) { }
  name: string;
  ngOnInit() {
    this.model = new category(this.name);
    this.myFormGroup = this.formBuilder.group({
      category: [this.model.category, Validators.required]
    });
  }

  storeCategoryData({ value, valid }: { value: category, valid: boolean }) {
    this.submitted = true;
    this.apiCallservice.handleData('Category/addCategory', 1, 0, value)
      .subscribe(x => this.response = x);
  }
}
