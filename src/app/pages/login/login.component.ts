import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallsService } from '../../common/services/ApiCalls/ApiCalls.service';
import { login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiCallsService]
})
export class LoginComponent implements OnInit {
  public username: any;
  public password: any;
  public show = true;
  public myFormGroup: FormGroup;
  public model: login;
  public modelSubmitted: login;
  public response: any;
  public logindetailslist;

  constructor(
    public router: Router,
    public apiCallservice: ApiCallsService,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.model = new login(this.username, this.password);
    this.myFormGroup = this.formBuilder.group({
      username: [this.model.username, Validators.required],
      password: [this.model.password, Validators.required]
    });
  }

  login({ value, valid }: { value: login, valid: boolean }) {
    this.apiCallservice.handleData('login/getLoginDetailsbyid', 0, 2, {}, value.username, value.password)
      .subscribe(res => {
        this.logindetailslist = res;
        if (this.logindetailslist._body === 'true') {
          this.show = !this.show;
          this.router.navigate(['DashBoard']);
        } else {
          alert('Wrong Credentials..!');
        }
      });
  }

  register() {
    this.show = !this.show;
    this.router.navigate(['Register']);
  }
}
