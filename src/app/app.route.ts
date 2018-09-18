import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { InformationComponent } from './pages/information/information.component';
import { CategoryHandlerComponent } from './pages/Category/category-handler/category-handler.component';
import { CategoryAddComponent } from './pages/Category/category-add/category-add.component';
import { CategoryDispComponent } from './pages/Category/category-disp/category-disp.component';
import { CategoryUpdateComponent } from './pages/Category/category-update/category-update.component';

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
                                }
                            ]
                    }
                ]
        }
    ]

