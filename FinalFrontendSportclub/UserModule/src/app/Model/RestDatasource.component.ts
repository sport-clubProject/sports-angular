import { UserDetails } from './User.model';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Message } from "./Messagemodel";
import { Sport } from "./Sport.model";

import { Cart } from "./Cart.model";
import { Court,  } from './Court.model';
import { BookingDetails } from './Bookingdetails.model';
import { Stadium } from './Stadium.model';
@Injectable()
export class SportDataSource{


  constructor(private http:HttpClient){

  }
   getSlots(sportname:string,date:string,courtname:string):Observable<string[]>{
    return this.http.get<string[]>(`http://localhost:55225/api/Slots/getslots?sportname=${sportname}&date=${date}&courtname=${courtname}`);
  }
  getotp(Messageobj:Message):Observable<number>{
    console.log(this.http.post<number>(`http://localhost:10697/api/Sms/SendSms`,Messageobj))
    return this.http.post<number>(`http://localhost:10697/api/Sms/SendSms`,Messageobj)
  }
  getSports():Observable<Sport[]>{
    console.log("datasource")
    return this.http.get<Sport[]>(`http://localhost:55225/api/Sports/getsports`)
  }
  getSportsById(id:number):Observable<Sport[]>{
    console.log("datasource")
    return this.http.get<Sport[]>(`http://localhost:55225/api/Sports/getsportbystadiumid?stadiumId=${id}`)
  }
  getCourts(sportname:string,date:string):Observable<Court[]>{
    return this.http.get<Court[]>(`http://localhost:55225/api/Courts/getcourts?SportName=${sportname}&Date=${date}`)
  }
  // verifyuser(mobile:string):Observable<boolean>{
  //   return this.http.get<boolean>(`${this.baseUrl}/verifymobile?MobileNumber=${mobile}`)
  // }
  saveCart(cart:Cart):Observable<string>{
    console.log(cart)
    return this.http.post<string>(`http://localhost:55225/api/Carts/saveallcarts`,cart)
  }
  deleteCart(id:number){
    console.log(id)
    const idString = localStorage.getItem('userid') ;
    const sid = idString !== null ? idString : "1";
    const finalId = parseInt(sid,10)
    return this.http.delete<string>(`http://localhost:55225/api/Carts/deletecart?userid=${finalId}&cartId=${id}`)
  }
  userCart(id:number):Observable<Cart[]>{
    console.log("karthik"," " ,id)

    return this.http.get<Cart[]>(`http://localhost:55225/api/Carts/getcarts?userId=${id}`)
  }


  sendbooking(Messageobj:Message):Observable<boolean>{
    return this.http.post<boolean>(`http://localhost:55225/api/Sms/sendBoking`,Messageobj)
  }
  saveuser(User:UserDetails):Observable<UserDetails>{
    return this.http.post<UserDetails>(`http://localhost:55225/api/User/saveuser`,User)
  }

  savebookingdetails(Booking:BookingDetails):Observable<UserDetails>{
    return this.http.post<UserDetails>(`http://localhost:55225/api/Booking/savebookingdetails`,Booking)
  }

  savebooking(booking:BookingDetails[]):Observable<UserDetails>{
    return this.http.post<UserDetails>(`http://localhost:55225/api/Booking/savebookingdetails`,booking)
  }

  getStadiums():Observable<Stadium[]>{
    return this.http.get<Stadium[]>(`http://localhost:10697/api/Stadium/getallstadiums`)

  }
  getuser(email:string):Observable<UserDetails>{
    return this.http.get<UserDetails>(`http://localhost:55225/api/User/getuser?email=${email}`)
  }
}
