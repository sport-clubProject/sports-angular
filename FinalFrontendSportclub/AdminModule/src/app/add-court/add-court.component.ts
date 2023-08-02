import { Component, OnInit } from '@angular/core';
import { Court } from '../model/Court.model';
import { Sport } from '../model/Sport.model';
import { Stadium } from '../model/Stadium.model';
import { AdminRepository } from '../model/adminrepository.component';

@Component({
  selector: 'app-add-court',
  templateUrl: './add-court.component.html',
  styleUrls: ['./add-court.component.css']
})
export class AddCourtComponent implements OnInit {
  courtref=new Court(0,"","","",0,"")
  selectedstadium:string='';
  selectedsport:string='';
  sports:Sport[]=[];
  stadiums:Stadium[]=[];
  constructor(private repo:AdminRepository) {
    this.stadiums=repo.stadiums
    this.sports=repo.sports
   }

  ngOnInit(): void {
  }
  savecourt(court:Court){
    this.courtref.courtName=court.courtName,
    this.courtref.courtImageUrl=court.courtImageUrl,
    this.courtref.category=court.category,
    this.courtref.courtPrice=court.courtPrice,
    console.log(this.selectedsport)
    console.log(this.sports)
    var sport:Sport=this.sports.filter(e=>e.sportName==this.selectedsport)[0]
    console.log(sport);
         this.repo.saveCourtBySportId(sport.sportId,this.courtref)
  }

}
