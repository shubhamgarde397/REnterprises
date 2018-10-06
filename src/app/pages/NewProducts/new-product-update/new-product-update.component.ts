import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../../common/services/ApiCalls/ApiCalls.service';
import { HandleDataService } from '../../../common/services/Data/handle-data.service';

@Component({
  selector: 'app-new-product-update',
  templateUrl: './new-product-update.component.html',
  styleUrls: ['./new-product-update.component.css']
})
export class NewProductUpdateComponent implements OnInit {

  constructor(
    public apiCallservice: ApiCallsService,
    public handledata: HandleDataService
  ) { }

  ngOnInit() {
    console.log(this.handledata.Data);
  }

}
