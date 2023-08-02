import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { SportsRepository } from '../Models/sport.repo';
import { Sport } from '../Models/Sport.model';
import { Stadiums } from '../Models/Stadiums.models';
import { Courts } from '../Models/Courts.model';
@Component({
  selector: 'app-add-court',
  templateUrl: './add-court.component.html',
  styleUrls: ['./add-court.component.css']
})
export class AddCourtComponent implements OnInit {
  stadiumarray:Stadiums[]=[];
  sports:Sport[]=[];
  public court=new Courts(0,"","",0.0,"")

  sportid:number=0;
  selectedStadium:String="";
  selectedSport:String="";
  selectedsportid:number=0;

  constructor(private fb:FormBuilder,private repo:SportsRepository) {
     this.stadiumarray=this.repo.stadiums;
     this.sports=this.repo.sports;
     console.log(this.sports)

   }
  courtForm=this.fb.group({
    courtsName:['',Validators.required],
    courtImageUrl:['',Validators.required],
    courtPrice:[0,Validators.required],
    status:['',Validators.required]
  }

  )
  ngOnInit(): void {
  }



  onSubmit(){
   console.log(this.selectedSport);
   console.log(this.selectedStadium);
   let sport:Sport | undefined=this.sports.find(e=>e.sportName==this.selectedSport)
   console.log(sport)
   console.log(this.sports)
 console.log(this.courtForm.value);
 if (sport) {
  this.repo.saveCourtBySportId(sport.sportId, this.courtForm.value);
  console.log(sport.sportId);
 }
 else {
  // Handle the case where the selected sport is not found
 }

  }




  getStadiums(stadiumName: String = "stadium1") {
    const stadium = this.stadiumarray.find(e => e.stadiumName === stadiumName);

    if (stadium) {
      const stadiumId = stadium.stadiumId;
      const selectedStadium = this.repo.getStadiumById(stadiumId);

      if (selectedStadium) {
        this.sports=selectedStadium.sports;
        return selectedStadium.sports;
      }
    }

    return []; // Return an empty array if the stadium or selectedStadium is not found
  }

}
