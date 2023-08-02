

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './SportsClub/Booking.component';

import { CourtComponent } from './SportsClub/Court.component';
import { SportComponent } from './SportsClub/Sport.component';
import { CartComponent } from './SportsClub/Cart.component';
import { PaymentComponent } from './SportsClub/Payment.component';
import { RouteGuardService } from './services/route-guard.service';
import { LandingPageComponent } from './SportsClub/LandingPage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './SportsClub/contact';
import { AboutComponent } from './SportsClub/aboutus';



const routes: Routes = [


  {path:'Booking/:courtrefid',component:BookingComponent},
      {path:'Login',component:LoginComponent},
      {path:'Courts/:id',component:CourtComponent},
      {path:'Sports/:stadiumId',component:SportComponent},
      {path:'Sports',component:SportComponent},
      {path:'usercart',component:CartComponent},
      {path:'Payment',component:PaymentComponent},
      {path:'Register',component:SignupComponent},
      //{path:'landingpage',component:LandingPageComponent},
      {path:"contact",component:ContactComponent},
      {path:"aboutus",component:AboutComponent},
      {path:'',component:LandingPageComponent},

  {
    path: 'admin',
    loadChildren: () =>
      import('./material-component/material.module').then(
        (m) => m.MaterialComponentsModule
      ),
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin', 'user',''],
    },
  },


];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule],

    })
    export class AppRoutingModule { }

