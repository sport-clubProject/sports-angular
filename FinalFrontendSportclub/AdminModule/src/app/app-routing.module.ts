import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddSportComponent } from './add-sport/add-sport.component';
import { AddStadiumComponent } from './add-stadium/add-stadium.component';
import { AddCourtComponent } from './add-court/add-court.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path : '',redirectTo:'dashboard  ',pathMatch:'full'},
  {path : 'home',component : HomeComponent},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'addSport',component : AddSportComponent},
  {path : 'addStadium',component : AddStadiumComponent},
  {path : 'addCourt',component : AddCourtComponent},
  {path : 'getbookings' ,component :DashboardComponent },
  {path:'manageuser',component:UserdetailsComponent},
  {path:'alldetails',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
