import { Stadium } from './../model/Stadium.model';
import { Component, OnInit } from '@angular/core';
import { AdminRepository } from '../model/adminrepository.component';
import { Sport } from '../model/Sport.model';
import { Court } from '../model/Court.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  stadiums:Stadium[]=[];
  selectedStadium:string="";
  sports:Sport[] |undefined =[];
  courts:Court[] | undefined=[] ;
  showsports:boolean=false;
  showCourtsName:boolean = false;
  constructor(private repo:AdminRepository) {
    this.stadiums=repo.stadiums
    this.sports=repo.sports;
    console.log(this.stadiums)
 }

  ngOnInit(): void {
  }
  showCourts(){
    this.showCourtsName = true
  }
  getsports(){
    console.log("hello")
     console.log(this.selectedStadium)
      var stadium=new Stadium(0,"","",[]);
      stadium=this.stadiums.filter(e=>e.stadiumName==this.selectedStadium)[0]
      var sport:Sport[] | undefined=[];
      sport=this.sports;
      this.sports=[];
     this.sports= this.stadiums.find(e=>e.stadiumId==stadium.stadiumId)?.sports
     this.showsports=true;
  }
  getcourts(id:number){
    this.showCourtsName = true
       this.courts=this.sports?.find(e=>e.sportId==id)?.courts
       console.log(this.courts)
  }

}
