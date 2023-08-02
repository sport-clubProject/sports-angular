// import { GlobalConstants } from './../shared/global-constants';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { UserService } from '../services/user.service';
import { SnackbarService } from '../services/snackbar.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserServiceService } from '../services/user-service.service';
import { GlobalConstants } from '../shared/global-constant';
import { SportRepository } from '../Model/SportsRepository.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  password=true;
  confirmPassword=true;
  signupForm:any =FormGroup;
  responseMessage:any;

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private userservice :UserServiceService,
    private snackbarService:SnackbarService,
    public dialogRef:MatDialogRef<SignupComponent>,
    private ngxService:NgxUiLoaderService,
    private repo:SportRepository) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      name:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      email:[null,[Validators.required,Validators.pattern(GlobalConstants.emialRegex)]],
      // Role:[null,[Validators.required,]],
      password:[null,[Validators.required]],
      confirmPassword:[null,[Validators.required]],
      Gender:[],
      UserMobile:[],
      UserAge:[]
    })
  }

  validateSubmit()
  {
    if(this.signupForm.controls['password'].value != this.signupForm.controls['confirmPassword'].value){
      return true;
    }
    else{
      return false;
    }
  }

  handleSubmit()
  {
    this.ngxService.start();
    var formData  =this.signupForm.value;
    console.log(formData);

    var data={
      UserName: formData.name,
      Email: formData.email,
      Role: 'user',
      Gender:formData.Gender,
      UserMobile:formData.UserMobile,
      UserAge:formData.UserAge,
      Password:formData.password
    }
    console.log(data);


    this.userservice.signup(data).subscribe((response:any)=> //string
    {
      this.ngxService.stop();//loder
      this.dialogRef.close();
      this.repo.userEmail=data.Email;
      this.responseMessage="registered sucessfully";
      this.snackbarService.openSnackBar(this.responseMessage,"");//popup
      this.router.navigate(['/'])
    },(error)=>{
      this.ngxService.stop();
      if(error.error?.message)
      {
        this.responseMessage=error.error?.message;
      }else{
        this.responseMessage=GlobalConstants.genricError;
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error)
    })
  }

}
