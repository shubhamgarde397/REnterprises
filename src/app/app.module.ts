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
import { SubCategoryAddComponent } from './pages/SubCategory/sub-category-add/sub-category-add.component';
import { SubCategoryHandlerComponent } from './pages/SubCategory/sub-category-handler/sub-category-handler.component';
import { SubCategoryDisplayComponent } from './pages/SubCategory/sub-category-display/sub-category-display.component';
import { SubCategoryUpdateComponent } from './pages/SubCategory/sub-category-update/sub-category-update.component';
import { NewProductHandlerComponent } from './pages/NewProducts/new-product-handler/new-product-handler.component';
import { NewProductAddComponent } from './pages/NewProducts/new-product-add/new-product-add.component';
import { NewProductDisplayComponent } from './pages/NewProducts/new-product-display/new-product-display.component';
import { NewProductUpdateComponent } from './pages/NewProducts/new-product-update/new-product-update.component';
import { StoreHandlerComponent } from './pages/Store/store-handler/store-handler.component';
import { StoreDisplayComponent } from './pages/Store/store-display/store-display.component';
import { CartDisplayComponent } from './pages/Cart/cart-display/cart-display.component';
import { ShopDisplayComponent } from './pages/Shop/shop-display/shop-display.component';
import { ShopHandlerComponent } from './pages/Shop/shop-handler/shop-handler.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

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
    SubCategoryAddComponent,
    SubCategoryHandlerComponent,
    SubCategoryDisplayComponent,
    SubCategoryUpdateComponent,
    NewProductHandlerComponent,
    NewProductAddComponent,
    NewProductDisplayComponent,
    NewProductUpdateComponent,
    StoreHandlerComponent,
    StoreDisplayComponent,
    CartDisplayComponent,
    ShopDisplayComponent,
    ShopHandlerComponent
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
    RouterModule.forRoot(routes),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [getFullApi, handleFunction],
  bootstrap: [AppComponent]
})
export class AppModule { }