import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { SportsRepository } from '../Models/sport.repo';
import { Sport } from '../Models/Sport.model';
import { Stadiums } from '../Models/Stadiums.models';
@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.css']
})
export class AddSportComponent implements OnInit {

  selected:String=" ";
  stadiumarray:Stadiums[]
  constructor(private fb:FormBuilder,private repo:SportsRepository,) {
   this.stadiumarray=this.repo.getStadium();


   }
  sportForm=this.fb.group({
    sportName:['',Validators.required],
    sportImageUrl:['',Validators.required],
    status:('Active'),
    courts:[[]]


  })
  ngOnInit(): void {
  }

  get sportName(){
     return this.sportForm.get('sportName')
  }


  get sportImageUrl(){
    return this.sportForm.get('sportImageUrl')
  }

  onSubmit() {
    let stadium:Stadiums
   stadium=this.stadiumarray.filter(e=>e.stadiumName==this.selected)[0]
   this.repo.saveSportByStadiumId(stadium.stadiumId,this.sportForm.value,);

  }

  send(){
    console.log(this.selected)
  }

}
