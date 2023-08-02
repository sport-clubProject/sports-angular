// import { GlobalConstants } from './../shared/global-constants';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { UserService } from '../services/user.service';
import { SnackbarService } from '../services/snackbar.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserServiceService } from '../services/user-service.service';
import { GlobalConstants } from '../shared/global-constant';
import { Token } from '@angular/compiler';
import { SportRepository } from '../Model/SportsRepository.component';
import { SportDataSource } from '../Model/RestDatasource.component';
import { Cart } from '../Model/Cart.model';
import { UserDetails } from '../Model/User.model';
// import { ForgotPasswordComponent } from '../material-component/forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: any = FormGroup;
  responseMessage: any;
  public usercart:Cart[]=[];
  public userdetails=new UserDetails(0);
  constructor(
    private dialog:MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    private userservice: UserServiceService,
    private snackbarService: SnackbarService,
    private ngxService: NgxUiLoaderService,
    private repo:SportRepository,
    public dialogRef: MatDialogRef<LoginComponent>,
    public repository:SportRepository,
    public datasource:SportDataSource
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        null,
        [Validators.required, Validators.pattern(GlobalConstants.emialRegex)],
      ],
      password: [null, [Validators.required]],
    });
  }
  handleSubmit() {
    this.ngxService.start();
    var formData = this.loginForm.value;
    var data = {
      Email: formData.email,
      Password: formData.password,
    };
    this.userservice.login(data).subscribe(
      (response: any) => {
        this.ngxService.stop();
        this.dialogRef.close();
        localStorage.setItem('token', response.token);
        this.responseMessage = 'Login Success';
        this.repo.userEmail=data.Email
         this.repo.getuser(data.Email)
        this.snackbarService.openSnackBar(this.responseMessage, '');
        const tokenPayload = JSON.parse(atob(response.token.split('.')[1]));
        const role = tokenPayload.role;
        if(role=='admin'){
          this.router.navigate(['/admin/AdminHome']);
        }
        else{
          // if(this.repo.loginhome){

            if(localStorage.getItem('userid') != ""){
              setTimeout(() => {
                this.repo.afterlogin=true
              }, 1000);
            }
            this.repo.homebutt=false;
           console.log(this.repository.userdetails);

            this.repository.getUserCart()

            this.router.navigate(['/']);

        }

      },
      (error) => {
        this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genricError;
        }
        this.snackbarService.openSnackBar(
          this.responseMessage,
          GlobalConstants.error
        );
      }
    );
  }



}
