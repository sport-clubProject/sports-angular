import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserDetails } from "./User.model";
import { BookingDetails } from "./Bookingdetails.model";
import { Stadium } from "./Stadium.model";
import { Court } from "./Court.model";
import { Sport } from "./Sport.model";
import { Payment } from "./payment.model";
@Injectable()
export class AdminDatasource{
  constructor(private http : HttpClient){
  }
  getuserdetails():Observable<UserDetails[]>{
    return this.http.get<UserDetails[]>(`http://localhost:10697/api/DashBoard/getusers`)
  }
  getbookingdetails():Observable<BookingDetails[]>{
    return this.http.get<BookingDetails[]>(`http://localhost:10697/api/DashBoard/getbookings`)
  }
  getrevenue():Observable<number>{
      return this.http.get<number>(`http://localhost:10697/api/DashBoard/getrevenue`)
  }
  getallstadiums():Observable<Stadium[]>{
    return this.http.get<Stadium[]>(`http://localhost:10697/api/Stadium/getallstadiums`)
  }

  //save or add stadium
  saveStadium(stadium:Stadium):Observable<Stadium[]>{

    return this.http.post<Stadium[]>(`http://localhost:10697/api/Stadium/savestadium`,stadium)
   }


   //save sport by stadium id
   saveSportByStadiumId(stadiumId: number, sport: Sport): Observable<any> {
     return this.http.post<any>(`http://localhost:10697/api/Sports/savesportbystadiumid?stadiumId=${stadiumId}`, sport);
   }

   //save court by sport id
     saveCourtBySportId(sportId:number,court:Court):Observable<any>{
       return this.http.post<any>(`http://localhost:10697/api/Courts/savecourtbysportid?sportId=${sportId}`,court);

     }

     // getall sports
     getallsports():Observable<Sport[]>{
        return this.http.get<Sport[]>(`http://localhost:10697/api/Sports/getallsports`)
     }
     getallcourts():Observable<Court[]>{
      return this.http.get<Court[]>(`http://localhost:10697/api/Courts/getallcourts`)
     }
     getbookingspermonth():Observable<number[]>{
         return this.http.get<number[]>(`http://localhost:10697/api/DashBoard/bookingspermonth`)
     }
     getcourtsperc(sportname:string,date:string):Observable<number[]>{
          return this.http.get<number[]>(`http://localhost:10697/api/DashBoard/avialblecourts?SportName=${sportname}&Date=${date}`)
     }


     getpayment():Observable<Payment[]>{
          return this.http.get<Payment[]>(`http://localhost:55225/getpayment`)
     }
}
