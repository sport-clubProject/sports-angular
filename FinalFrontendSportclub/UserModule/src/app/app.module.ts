import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderConfig, NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorInterceptor } from './services/token-interceptor.service';
import { MaterialModule } from './shared/material-module';
import { SharedModule } from './shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { SportsModule } from './SportsClub/SportClub.module';
import { ModelModule } from './Model/model.module';
import { MaterialComponentsModule } from './material-component/material.module';
import { LoginComponent } from './login/login.component';
import { MatDialogRef } from '@angular/material/dialog';



const ngxUiLoaderConfig:NgxUiLoaderConfig = {
  text:"Loding...",
  textColor:'#FFFFF',
  textPosition:"center-center",
  bgsColor:"#7b1fa2",
  fgsColor:"#7b1fa2",
  fgsType:SPINNER.squareLoader,
  fgsSize:100,
  hasProgressBar:false
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
  LoginComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SportsModule,
    ModelModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    SharedModule,
   MaterialModule,
   MatCardModule,
   HttpClientModule,
   MaterialModule,
   MaterialComponentsModule
  ],
  providers: [HttpClientModule,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
