import { Court } from '../model/Court.model';
import { Sport } from '../model/Sport.model';
import { AdminRepository } from '../model/adminrepository.component';
import { Stadium } from './../model/Stadium.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.css']
})
export class AddSportComponent implements OnInit {
  stadiums:Stadium[]=[];
  sport=new Sport(0);
  court=new Court(0,"","","",0,"")

  selectedstadium:string="";
  constructor(private repo:AdminRepository) {
      this.stadiums=repo.stadiums
      console.log(this.stadiums)
   }

  ngOnInit(): void {
  }
  savesport(sport:Sport){
    console.log(sport)
    var sportref=new Sport(0)
    sportref.sportName=sport.sportName
    sportref.sportImageUrl=sport.sportImageUrl
     var courts:Court[]=[]
      courts.push(this.court)
     sportref.courts=courts
    sportref.status=sport.status
    console.log(this.selectedstadium)
    let stadium:Stadium
    stadium=this.repo.stadiums.filter(e=>e.stadiumName==this.selectedstadium)[0]
    console.log(stadium)
    console.log(sportref)
    this.repo.saveSportByStadiumId(stadium.stadiumId,sportref);
  }

}
