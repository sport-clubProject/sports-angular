import { Injectable } from '@angular/core';
import { SportsDataSource } from './sports.datasource';
import { Sport } from './Sport.model';
import Swal from "sweetalert2"
import { Courts } from './Courts.model';
import { Stadiums } from './Stadiums.models';
import { ActivatedRoute } from '@angular/router';

@Injectable({providedIn: 'root'})
export class SportsRepository{


  //assigning stadiums to stadium array
  public stadiums:Stadiums[]=[];

  //assigning sports
  sports:Sport[]=[];

  //assigning courts
  courts:Courts[]=[];




public selectedSport:string='';

public show=true
  public showHeader=true
 public  showFooter=true

//get sport from datasource
  constructor(private datasource:SportsDataSource) {

    //subscribing stadiums data
    this.datasource.getStadiums().subscribe(data=>{
      this.stadiums=data;
     })


  }

  //returning all stadiums
  getStadium(){
    console.log(this.stadiums)
    return this.stadiums;
  }


  //get sports by stadiumid
  getSportByStadiumId(stadiumId:number){
  this.datasource.getSportByStadiumId(stadiumId).subscribe(data=>{
    this.sports=data;
   console.log(this.sports)
  })

  }


  //returning sports
  getSports(){
    console.log(this.sports)
    return this.sports;
  }


  //returning stadiumby by id
  getStadiumById(id:number){
    return this.stadiums.find(c=>c.stadiumId==id);
  }

  //get courts by sportId
  getCourtBySportId(sportId:number){
    this.datasource.getCourtBySportId(sportId).subscribe(data=>{
      this.courts=data;
      console.log(this.courts);
    })
  }


  //returning courts
  getCourts(){
    console.log(this.courts)
    return this.courts;
  }


  // save stadium
saveStadium(stadium: Stadiums) {
  this.datasource.saveStadium(stadium).subscribe(
    (data) => {
      this.stadiums=data;
      Swal.fire('Success', 'Stadium added successfully', 'success');
    },
    (error) => {
      Swal.fire('', 'Stadium not added', 'warning');
    }
  );
}



  //save sportbystadiumid

  saveSportByStadiumId(stadiumId: number, sport: Sport) {
    this.datasource
  .saveSportByStadiumId(stadiumId,sport).subscribe(
    data=>{
      Swal.fire('success','sport added sucessfully ','success')
  this.sports.push(data)
  console.log( this.stadiums.find(c=>c.stadiumId==stadiumId))
 this.stadiums.find(c=>c.stadiumId==stadiumId)?.sports.push(data)//error
},
(error)=>{
  Swal.fire('','sport not added  ',"warning")
}
  );
}


//save courtby sport id

saveCourtBySportId(sportId:number=1, court: Courts) {
  this.datasource
.saveCourtBySportId(sportId,court).subscribe(
  data=>{
    Swal.fire('success','court added sucessfully ','success')
this.sports.push(data)
console.log( this.sports.find(c=>c.sportId==sportId))
this.sports.find(c=>c.sportId==sportId)?.courts.push(data)//error
},
(error)=>{
Swal.fire('','court not added  ',"warning")
}
);
}



//delete stadium
deleteStadium(stadiumid:number){
  this.datasource.deleteStadium(stadiumid)
   .subscribe(e=>{
    console.log("no error")
    console.log(e)
    this.datasource.getStadiums().subscribe(data=>
      this.stadiums=data)
    },

  );

}

//delete sport
deleteSport(sportId:number){
   this.datasource.deleteSport(sportId).subscribe(data=>{
    this.sports=data;
  });
}
//delete court
deleteCourt(courtId:number){
   this.datasource.deleteCourt(courtId).subscribe(data=>{
    this.courts=data;
  });
}
}
