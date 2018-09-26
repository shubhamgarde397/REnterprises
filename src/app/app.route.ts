import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { InformationComponent } from './pages/information/information.component';
import { CategoryHandlerComponent } from './pages/Category/category-handler/category-handler.component';
import { CategoryAddComponent } from './pages/Category/category-add/category-add.component';
import { CategoryDispComponent } from './pages/Category/category-disp/category-disp.component';
import { CategoryUpdateComponent } from './pages/Category/category-update/category-update.component';
import { SubCategoryHandlerComponent } from './pages/SubCategory/sub-category-handler/sub-category-handler.component';
import { SubCategoryAddComponent } from './pages/SubCategory/sub-category-add/sub-category-add.component';
import { SubCategoryDisplayComponent } from './pages/SubCategory/sub-category-display/sub-category-display.component';
import { SubCategoryUpdateComponent } from './pages/SubCategory/sub-category-update/sub-category-update.component';
import { NewProductHandlerComponent } from './pages/NewProducts/new-product-handler/new-product-handler.component';
import { NewProductDisplayComponent } from './pages/NewProducts/new-product-display/new-product-display.component';
import { NewProductAddComponent } from './pages/NewProducts/new-product-add/new-product-add.component';
import { NewProductUpdateComponent } from './pages/NewProducts/new-product-update/new-product-update.component';
import { StoreHandlerComponent } from './pages/Store/store-handler/store-handler.component';
import { StoreDisplayComponent } from './pages/Store/store-display/store-display.component';
import { CartDisplayComponent } from './pages/Cart/cart-display/cart-display.component';
import { ShopHandlerComponent } from './pages/Shop/shop-handler/shop-handler.component';
import { ShopDisplayComponent } from './pages/Shop/shop-display/shop-display.component';

export const routes: Routes =
    [
        {
            path: 'DashBoard',
            component: DashBoardComponent,
            children:
                [
                    {
                        path: 'Information',
                        component: InformationComponent,
                        children:
                            [
                                {
                                    path: 'Category_Handler',
                                    component: CategoryHandlerComponent,
                                    children:
                                        [
                                            {
                                                path: '',
                                                component: CategoryDispComponent
                                            },
                                            {
                                                path: 'CategoryAdd',
                                                component: CategoryAddComponent
                                            },
                                            {
                                                path: 'CategoryDisp',
                                                component: CategoryDispComponent
                                            },
                                            {
                                                path: 'CategoryUpdate',
                                                component: CategoryUpdateComponent
                                            }
                                        ]
                                },
                                {
                                    path: 'SubCategory_Handler',
                                    component: SubCategoryHandlerComponent,
                                    children:
                                        [
                                            {
                                                path: '',
                                                component: SubCategoryDisplayComponent
                                            },
                                            {
                                                path: 'SubCategoryAdd',
                                                component: SubCategoryAddComponent
                                            },
                                            {
                                                path: 'SubCategoryDisplay',
                                                component: SubCategoryDisplayComponent
                                            },
                                            {
                                                path: 'SubCategoryUpdate',
                                                component: SubCategoryUpdateComponent
                                            }
                                        ]
                                },
                                {
                                    path: 'NewProduct_Handler',
                                    component: NewProductHandlerComponent,
                                    children:
                                        [
                                            {
                                                path: '',
                                                component: NewProductDisplayComponent
                                            },
                                            {
                                                path: 'NewProductAdd',
                                                component: NewProductAddComponent
                                            },
                                            {
                                                path: 'NewProductDisplay',
                                                component: NewProductDisplayComponent
                                            },
                                            {
                                                path: 'NewProductUpdate',
                                                component: NewProductUpdateComponent
                                            }
                                        ]
                                },
                                {
                                    path: 'Store_Handler',
                                    component: StoreHandlerComponent,
                                    children:
                                        [
                                            {
                                                path: '',
                                                component: StoreDisplayComponent
                                            },
                                            {
                                                path: 'StoreDisplay',
                                                component: StoreDisplayComponent
                                            }
                                        ]
                                },
                                {
                                    path: 'Shop_Handler',
                                    component: ShopHandlerComponent,
                                    children:
                                        [
                                            {
                                                path: '',
                                                component: ShopDisplayComponent
                                            },
                                            {
                                                path: 'ShopDisplay',
                                                component: ShopDisplayComponent
                                            }
                                        ]
                                }
                            ]
                    },
                    {
                        path: 'Cart',
                        component: CartDisplayComponent
                    }
                ]
        }
    ]

