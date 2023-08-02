import { LandingPageComponent } from './LandingPage.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { BookingComponent } from './Booking.component';

import { SportComponent } from './Sport.component';
import { CourtComponent } from './Court.component';
import { CartComponent } from './Cart.component';
import { PaymentComponent } from './Payment.component';
import { NavBarComponent } from './Navbar.component';
import { ModelModule } from '../Model/model.module';
import { LoginComponent } from '../login/login.component';
import { ContactComponent } from './contact';
import { AboutComponent } from './aboutus';

@NgModule({
  imports: [FormsModule,MatDatepickerModule,BrowserModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatCardModule,
  MatDatepickerModule,MatButtonModule,MatInputModule,ModelModule,CommonModule,RouterModule,MatOptionModule,MatSelectModule],
  exports: [BookingComponent,SportComponent,CourtComponent,CartComponent,PaymentComponent,NavBarComponent,LandingPageComponent,ContactComponent,AboutComponent],
  declarations: [BookingComponent,SportComponent,CourtComponent,CartComponent,PaymentComponent,NavBarComponent,LandingPageComponent,ContactComponent,AboutComponent]
})
export class SportsModule { }
