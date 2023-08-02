import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportRepository } from '../Model/SportsRepository.component';
import { Sport } from '../Model/Sport.model';
import { SportDataSource } from '../Model/RestDatasource.component';
import { Stadium } from '../Model/Stadium.model';

@Component({
  selector: 'Sport-Sport',
  templateUrl: 'Sport.component.html',
  styleUrls:['Sport.component.css']
})

export class SportComponent  {
  sports:Sport[] | undefined=[]
  stadiums:Stadium[]=[];
  selectedSport:string = "";
    constructor(private repo:SportRepository,private router:Router,public datasource:SportDataSource,public activatedRoute:ActivatedRoute)
  {
    console.log(this.repo.stadiums)
    console.log((activatedRoute.snapshot.params["stadiumId"]))
      if(repo.sportsType != ""){
        this.selectedSport = repo.sportsType;
      }
      if(repo.sportsType == ""){
        this.selectedSport = "Select stadium"
      }
      repo.book=false;
      repo.home=true;

      if(activatedRoute.snapshot.params["stadiumId"] != null){
        console.log("ggggg")
        this.datasource.getSportsById(this.activatedRoute.snapshot.params["stadiumId"]).subscribe(data =>{
          this.sports = data;
        })
       }
       if(activatedRoute.snapshot.params["stadiumId"] == null){
        this.datasource.getSports().subscribe(data=>{
          this.sports=data;
         })
      }
      this.sports=this.repo.stadiums.find(e=>e.stadiumId==(this.activatedRoute.snapshot.params["stadiumId"]))?.sports
      this.repo.Sports=this.sports
       this.stadiums = this.repo.returnstadiums()
      .filter(stadiumName => stadiumName.stadiumName !=this.selectedSport)
      console.log(this.sports+"jhgfhj")



    }
  gotoCourts(sportid:number,sportname:string){
    console.log("nvaigate");
    this.repo.sportname = sportname;
     this.router.navigate(['/Courts',sportid])
  }
  get getSports(){
       console.log(this.repo.sportarra)
      return this.sports
  }

}
