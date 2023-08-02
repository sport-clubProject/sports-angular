import { Component, OnInit } from '@angular/core';
import { SportRepository } from '../Model/SportsRepository.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { SportDataSource } from '../Model/RestDatasource.component';
import { Cart } from '../Model/Cart.model';
import Swal from 'sweetalert2';
// import { SportRepository } from '../Model/SportsRepository.component';

@Component({
  selector: 'navbar',
  templateUrl: './NavBar.component.html'
})

export class NavBarComponent implements OnInit {
  constructor(public datasource:SportDataSource,public repository:SportRepository,private dialog:MatDialog,private service:UserServiceService,private router:Router) {

    // console.warn(localStorage.getItem('userid'))
    if (localStorage.getItem('userid') !== null) {
      this.repository.afterlogin = true;
    }

    repository.getUserCart();
              }

  ngOnInit() { }

  handleSignUpAction()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width="550px";
    this.dialog.open(SignupComponent,dialogConfig);
  }

  handleLoginAction()
  {
    // this.router.navigateByUrl("/Login");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width="550px";
    this.dialog.open(LoginComponent,dialogConfig);
  }
  logout(){

    Swal.fire({
      title: 'Are you sure you want to logout!',
      showDenyButton: true,
      confirmButtonText: 'Logout',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('userid');
        localStorage.clear();
        setTimeout(() => {
          if(localStorage.getItem('userid') != ""){
            this.repository.afterlogin=false;
          }
        }, 1000);
      }
    })
  }
}
