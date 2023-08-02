import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
import { MaterialModule } from '../shared/material-module';
import { SportsModule } from '../SportsClub/SportClub.module';
import { AddCourtComponent } from './add-court/add-court.component';
import { AdminSportComponent } from './admin-sport/admin-sport.component';
import { AddSportComponent } from './add-sport/add-sport.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SportsDataSource } from './Models/sports.datasource';
import { SportsRepository } from './Models/sport.repo';
import { AddStadiumComponent } from './add-stadium/add-stadium.component';
import { AdminCourtComponent } from './admin-court/admin-court.component';
import { AdminStadiumsComponent } from './admin-stadiums/admin-stadiums.component';
import { ConfirmationComponent } from './dialog/confirmation/confirmation.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    // SportsModule
  ],
  declarations: [AdminSportComponent,
    AddSportComponent,
    AddCourtComponent,
    AdminHomeComponent,
    AddStadiumComponent,
    AdminCourtComponent,
    AdminStadiumsComponent,
    ConfirmationComponent],
  providers: [SportsDataSource,SportsRepository],
})
export class MaterialComponentsModule {}
