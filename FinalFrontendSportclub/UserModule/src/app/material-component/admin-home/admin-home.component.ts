import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';


import { MatDialog } from '@angular/material/dialog';


import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
} from "ngx-ui-loader";
import { AddSportComponent } from '../add-sport/add-sport.component';
import { AddCourtComponent } from '../add-court/add-court.component';
import { SportsRepository } from '../Models/sport.repo';
import { Router } from '@angular/router';
import { AddStadiumComponent } from '../add-stadium/add-stadium.component';
import { ConfirmationComponent } from '../dialog/confirmation/confirmation.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "red",
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};

@Component({
  selector:'admin',
    templateUrl: 'admin-home.component.html',
    styleUrls:['admin-home.component.css']
})

export class AdminHomeComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );



    constructor(private breakpointObserver: BreakpointObserver,private overlay:OverlayContainer,
      private repository:SportsRepository,
      private _dialog:MatDialog,
      private route:Router

      ) {
        this.repository.showHeader=false;
        this.repository.showFooter=false;
    }

    openAddStadium(){
      this._dialog.open(AddStadiumComponent)
    }

  openAddSport(){
    this._dialog.open(AddSportComponent)
    // this.route.navigateByUrl("/admin/AdminHome/addStadium");
  }

  openAddCourt(){
    this._dialog.open(AddCourtComponent)
  }



    toggleControl=new FormControl(false)
    @HostBinding('class') className='';
    darkClassName='theme-dark';
    lightClassName='theme-light';

    ngOnInit(){
      this.toggleControl.valueChanges.subscribe((darkMode)=>{
        this.className=darkMode ? this.darkClassName :this.lightClassName;
        if(darkMode){
         this.overlay.getContainerElement().classList.add(this.darkClassName)
        }
        else{
          this.overlay.getContainerElement().classList.remove(this.darkClassName)
        }
      })
    }
  get show(){
    // console.log("call me")
    // console.log(this.repository.show)
    return this.repository.show
  }
  logout(){
    this.repository.show=false;
    this._dialog.open(ConfirmationComponent);

  }


  //navigate to admin sport


  //navigate to admin stadiums
  navigateToStadims(){
    this.route.navigateByUrl("admin/adminstadium");
  }
}

