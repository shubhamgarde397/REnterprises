import { Component, OnInit, Input } from '@angular/core';
import { HandleDataService } from '../../../common/services/Data/handle-data.service';
import { Location } from '@angular/common';
import { ApiCallsService } from '../../../common/services/ApiCalls/ApiCalls.service';
import { Http, Response } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css'],
  providers: [ApiCallsService]
})
export class CategoryUpdateComponent implements OnInit {

  public show: boolean = false;
  public list;
  public category: string;
  public myFormGroup: FormGroup;

  constructor(
    public handledata: HandleDataService,
    public _location: Location,
    public formBuilder: FormBuilder,
    public apiCallservice: ApiCallsService) { }

  ngOnInit() {
    this.myFormGroup = this.formBuilder.group({
      category: this.handledata.Data.category
    });
  }
  change = function (data) {
    data.value.id = this.handledata.Data._id;
    this.apiCallservice.handleData('Category/updateCategory', 3, 0, data.value)
      .subscribe((response: Response) => {
        this.show = !this.show;
        this._location.back();
      });
  };

  back() {
    this.show = !this.show;
    this._location.back();
  }

}
