import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserServiceService } from './services/user-service.service';
import { Router } from '@angular/router';
import { SportRepository } from './Model/SportsRepository.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sportclub_Ang';
  constructor(public repo:SportRepository,
    private dialog:MatDialog,
    private service:UserServiceService,
    private router:Router){

  }

  // handleSignUpAction()
  // {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.width="550px";
  //   this.dialog.open(RegisterComponent,dialogConfig);
  // }
}
