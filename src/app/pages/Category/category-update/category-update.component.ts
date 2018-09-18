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

  private show: boolean = false;
  private list;
  private category: string;
  private myFormGroup: FormGroup;

  constructor(
    private handledata: HandleDataService,
    private _location: Location,
    private formBuilder: FormBuilder,
    private apiCallservice: ApiCallsService) { }

  ngOnInit() {
    this.myFormGroup = this.formBuilder.group({
      category: this.handledata.Data.category
    });
  }
  change = function (data) {
    let category = data.value.category
    const id = this.handledata.Data._id;
    this.arr = { category, id };
    this.apiCallservice.handleData('Category/updateCategory', 3, 0, this.arr)
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
