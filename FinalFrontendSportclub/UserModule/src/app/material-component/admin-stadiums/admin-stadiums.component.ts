import { Stadiums } from './../Models/Stadiums.models';
import { Component, OnInit } from '@angular/core';
import { SportsRepository } from '../Models/sport.repo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-stadiums',
  templateUrl: './admin-stadiums.component.html',
  styleUrls: ['./admin-stadiums.component.css']
})
export class AdminStadiumsComponent implements OnInit {

  constructor(private repo:SportsRepository,private route:Router) { }


  //getting stadiums from repository

  get Stadiums(){
    console.log(this.repo.getStadium())
    return this.repo.getStadium();
  }

  ngOnInit(): void {
  }

  //deleting stadium
  deleteStadium(stadiumid:number){
   this.repo.deleteStadium(stadiumid);
   this.Stadiums;
  }
  gotosports(id:number){
    this.route.navigate(['admin/AdminHome/adminsport',id])
  }


}
