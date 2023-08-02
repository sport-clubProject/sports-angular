import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AddCourtComponent } from './add-court/add-court.component';
import { RouteGuardService } from '../services/route-guard.service';
import { AddSportComponent } from './add-sport/add-sport.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSportComponent } from './admin-sport/admin-sport.component';
import { AdminStadiumsComponent } from './admin-stadiums/admin-stadiums.component';
import { AddStadiumComponent } from './add-stadium/add-stadium.component';
import { AdminCourtComponent } from './admin-court/admin-court.component';



export const MaterialRoutes: Routes = [
  {
    path:'court',
    component:AddCourtComponent,
    canActivate:[RouteGuardService],
    data:{
           expectedRole:['admin']
    }
  },
  {
    path:'sport',
    component:AddSportComponent,
    canActivate:[RouteGuardService],
    data:{
           expectedRole:['admin']
    }
  },
  {
    path:'AdminHome',
    component:AdminHomeComponent,
    canActivate:[RouteGuardService],
    data:{
           expectedRole:['admin','user']
    },
    children:[
      {path:'adminstadium',component:AdminStadiumsComponent},
      {path:'addStadium',component:AddStadiumComponent},

      {
        path:'adminsport/:stadiumId',
        component:AdminSportComponent,
        canActivate:[RouteGuardService],
        data:{
               expectedRole:['admin']
        }
      },
      {
        path:'admincourt/:sportId',
        component:AdminCourtComponent,
        canActivate:[RouteGuardService],
        data:{
               expectedRole:['admin']
        }
      },
    ]
  },

  {
    path:'adminstadium',
    component:AdminStadiumsComponent,
    canActivate:[RouteGuardService],
    data:{
           expectedRole:['admin']
    }
  },
  {
    path:'addStadium',
    component:AddStadiumComponent,
    canActivate:[RouteGuardService],
    data:{
           expectedRole:['admin']
    }
  },



];
 /* {
    path:'category',
    component:ManageCategoryComponent,
    canActivate:[RouteGuardService],
    data:{
           expectedRole:['admin']
    }
  },
  {
    path:'product',
    component:ManageProductComponent,
    canActivate:[RouteGuardService],
    data:{
           expectedRole:['admin']
    }
  },
  {
    path:'order',
    component:ManageOrderComponent,
    canActivate:[RouteGuardService],
    data:{
           expectedRole:['admin','user']
    }
  },
  // {
  //   path:'forgotpassword',
  //   component:ForgotPasswordComponent,
  //   canActivate:[RouteGuardService],
  //   data:{
  //          expectedRole:['admin','user']
  //   }
  // },
  {
    path:'bill',
    component:ViewBillComponent,
    canActivate:[RouteGuardService],
    data:{
           expectedRole:['admin','user']
    }
  },{
    path:'user',
    component:ManageUserComponent,
    canActivate:[RouteGuardService],
    data:{
           expectedRole:['admin']
    }
  }*/
