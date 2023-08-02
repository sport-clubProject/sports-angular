import { Injectable } from "@angular/core";
import { AdminDatasource } from "./restdatasource.component";
import { UserDetails } from './User.model';
import { BookingDetails } from "./Bookingdetails.model";
import { Stadium } from "./Stadium.model";
import { Sport } from "./Sport.model";
import Swal from "sweetalert2";

import { Court } from "./Court.model";
import { Payment } from "./payment.model";

@Injectable()
export class AdminRepository
{
  public bookingdetails:BookingDetails[]=[];
  public userdetails:UserDetails[]=[];
  public revenue:number=0;
  public stadiums:Stadium[]=[];
  public sports:Sport[]=[];
  public courts:Court[]=[];
  public bookingspermonth:number[]=[]
  public courtsperc:number[]=[];
  public payments:Payment[]=[];
   constructor(private datasource:AdminDatasource){

         datasource.getrevenue().subscribe(data=>{
          this.revenue=data;
         })

         datasource.getpayment().subscribe(data=>{
          this.payments=data
         })

         datasource.getallstadiums().subscribe(data=>{
          console.log(data)
            this.stadiums=data;
         })
         datasource.getbookingdetails().subscribe(data=>{
           this.bookingdetails=data;
         })

         datasource.getallsports().subscribe(data=>{
             this.sports=data;
         })
         datasource.getallcourts().subscribe(data=>{
             this.courts=data;
         })
         datasource.getuserdetails().subscribe(data=>{
            this.userdetails=data;
         })
         datasource.getbookingspermonth().subscribe(data=>{
            console.log(data)
            this.bookingspermonth=data;
         })


   }

   // savesport
   saveSportByStadiumId(stadiumId: number, sport: Sport) {
    this.datasource.saveSportByStadiumId(stadiumId,sport).subscribe(
    data=>{
      Swal.fire('success','sport added sucessfully ','success')
  this.sports.push(data)
 this.stadiums.find(c=>c.stadiumId==stadiumId)?.sports.push(data)//error
},
(error)=>{
  Swal.fire('','sport not added  ',"warning")
}
  );
}

// save stadium

saveStadium(stadium: Stadium) {
  this.stadiums.push(stadium)
  this.datasource.saveStadium(stadium).subscribe(
    (data) => {
      //this.stadiums=data;
      Swal.fire('Success', 'Stadium added successfully', 'success');
    },
    (error) => {
      Swal.fire('', 'Stadium not added', 'warning');
    }
  );
}

// save court

saveCourtBySportId(sportId:number, court: Court) {
  this.datasource
.saveCourtBySportId(sportId,court).subscribe(
  data=>{
    Swal.fire('success','court added sucessfully ','success')
//this.sports.push(data)
//console.log( this.sports.find(c=>c.sportId==sportId))

    // this.sports.find(c=>c.sportId==sportId)?.courts.push(data)//error
// const foundSport = this.sports.find(c => c.sportId == sportId) as Sport | undefined;
// if (foundSport) {
//   foundSport.courts.push(data);
// }



},
(error)=>{
Swal.fire('','court not added  ',"warning")
}
);
}
}
