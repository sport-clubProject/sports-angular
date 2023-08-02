import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddSportComponent } from './add-sport/add-sport.component';
import { AddStadiumComponent } from './add-stadium/add-stadium.component';
import { AddCourtComponent } from './add-court/add-court.component';
import { AdminDatasource } from './model/restdatasource.component';
import { AdminRepository } from './model/adminrepository.component';
import { HttpClientModule } from '@angular/common/http';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { DetailsComponent } from './details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    DashboardComponent,
    AddSportComponent,
    AddStadiumComponent,
    AddCourtComponent,
    UserdetailsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MessagesModule,
    BrowserAnimationsModule

  ],
  providers: [AdminDatasource,AdminRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
