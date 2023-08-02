import { Component, OnInit } from '@angular/core';
import { SportsRepository } from '../Models/sport.repo';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-admin-sport',
  templateUrl: './admin-sport.component.html',
  styleUrls: ['./admin-sport.component.css']
})
export class AdminSportComponent implements OnInit {

  public stadiumId:number=0
  public sports: any[] = [];
  constructor(private repo:SportsRepository,private ngxService: NgxUiLoaderService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    //getting id from stadium
    this.router.paramMap.subscribe(params=>{
      console.log(params.get('stadiumId'))
     this.stadiumId =Number(params.get('stadiumId'))
     this.repo.getSportByStadiumId(this.stadiumId)

    })

    // [routerLink]="['admin/admincourt', sport.sportId]"

    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 1000)

    }
    removeSport(sportId:number){
    this.repo.deleteSport(sportId)
  }


  //getting sports based on stadium from repository
  getSportsByStadium(stadiumId: number) {
    return this.repo.getSportByStadiumId(stadiumId)

  }


  //getting sports data from repository
   get getSports() {
    console.log(this.repo.getSports())
     return this.repo.getSports();
  }



  gotocourts(id:number){
    this.route.navigate(["admin/AdminHome/admincourt",id]);
  }


}
