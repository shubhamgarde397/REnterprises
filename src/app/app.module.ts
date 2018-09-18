import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatSelectModule,
  MatFormField,
} from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.route';
import { LoginComponent } from './pages/login/login.component';
import { getFullApi } from './common/services/ApiCalls/getFullApi.service';
import { handleFunction } from './common/services/functions/handleFunctions';
import { HandleDataService } from './common/services/Data/handle-data.service';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { InformationComponent } from './pages/information/information.component';
import { CategoryHandlerComponent } from './pages/Category/category-handler/category-handler.component';
import { CategoryAddComponent } from './pages/Category/category-add/category-add.component';
import { CategoryDispComponent } from './pages/Category/category-disp/category-disp.component';
import { CategoryUpdateComponent } from './pages/Category/category-update/category-update.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    NavigationComponent,
    InformationComponent,
    CategoryHandlerComponent,
    CategoryAddComponent,
    CategoryDispComponent,
    CategoryUpdateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatSelectModule,
    MatSidenavModule,
    RouterModule.forRoot(routes)
  ],
  providers: [getFullApi, handleFunction, HandleDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }