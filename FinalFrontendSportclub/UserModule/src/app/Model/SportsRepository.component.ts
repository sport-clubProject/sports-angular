import { filter } from 'rxjs/operators';
import { Stadium } from './Stadium.model';
import { Injectable } from '@angular/core';
import { SportDataSource } from "./RestDatasource.component";
import { Message } from './Messagemodel';
import { Sport } from './Sport.model';
import { Court } from './Court.model';
import { BookingDetails } from './Bookingdetails.model';
import { Cart } from './Cart.model';
import { UserDetails } from './User.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppServiceService } from './app-service.service';
import { warn } from 'console';
@Injectable()
export class SportRepository
{
  cartsize:number = 0;

  public sportname:string = "";
  public courtrefid:number=0;
  public courtname:string | undefined=""
  public slottime:string = "";
  public sportsType:string = "";
  public selectdate="";
  public selectedDate=new Date();
  public slots:string[]=[];
  public Sports:Sport[] | undefined=[];
  public Courts:Court[]=[];
  public usercart:Cart[]=[];
   public loginhome:boolean=false;
   public loginbookpage:boolean=true;
  public stadiums:Stadium[]=[]
  public userdetails=new UserDetails(0);
  public showHeader=true;
  public showFooter=true;
  public afterlogin=false;
  public homebutt=true;
  public home=false;
  public book=false;
  public otp:number=0;
  public count:number=0;
  bookingarray:BookingDetails[] = [];
  public verifyuser:boolean=false;
  public totalprice:number=0;
  public bookingdetails=new BookingDetails();
  showsucessfull:boolean=false;
  public loginstatus=false;
  public userEmail:string='';
  public userid:number=0;
  public user=new UserDetails(0);
  public sportarra:Sport[][]=[];
  public cartSubscription?: Subscription;
  constructor(private datasource:SportDataSource,private route:Router,public appService:AppServiceService){


  console.log(this.totalprice)
     this.datasource.getStadiums().subscribe(data=>{
      console.log(data)
      this.stadiums=data
    })


  }
  getslot(sportname:string,date:string,courtname:string){
    this.datasource.getSlots(sportname,date,courtname).subscribe(data=>{
      this.slots=data;
      console.log(this.slots)
    });
  }

  getuser(email:string){
    this.datasource.getuser(email).subscribe(data=>{
      this.userdetails=data
      this.appService.userid=data.userId;
      console.log(data)
      console.log(data.userId)
      localStorage.clear();
      localStorage.setItem('userid',data.userId.toString())



    })
     return this.userdetails;
  }
  getUserCart(){

    setTimeout(() => {
      // This code will execute after one second
      // Add any additional logic or code here that you want to execute after the delay


    if(!this.cartSubscription){
const idString = localStorage.getItem('userid') ?? "";
const id = parseInt(idString)
console.warn(idString)
console.warn(id)

    this.cartSubscription = this.datasource.userCart(id).subscribe(cart=>{
      console.log(this.appService.userid)
        this.usercart = cart;
        console.log(cart,"pppppppp")
        this.cartsize = this.usercart.length
       })
      }

    }, 1000);
  }

  unsubscribeCart() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
      this.cartSubscription = undefined;
      // this.userOrders = [];
    }
  }
    returnstadiums():Stadium[]{
        return this.stadiums

    }

  
  returnsport():Sport[] | undefined{
    return this.Sports
  }

  getotp(Messageobj:Message){
    this.datasource.getotp(Messageobj).subscribe(data=>{
         this.otp=data;
    })

  }

  displayslot(){
    return this.slots;
  }
  getcourtbyid(id:number):Court[]|undefined{
    if(this.count==0){
      this.count=this.count+1;

    return this.Sports?.find(e=>e.sportId==id)?.courts
  }
  else{
    console.log(this.count)
    console.log("else block")
    return this.Courts;
  }
  }
  displaysport():Sport[] | undefined{
    console.log(this.Sports)
    return this.Sports
  }
   savebooking(bookingdeatils:BookingDetails){
      this.bookingdetails=bookingdeatils;
   }
  getbookingdetails(courtId:number):Court{
    return this.Courts.filter( c => c.courtId == courtId)[0]
  }


  saveCart(cart:Cart){
    this.usercart.push(cart)
      this.cartsize = this.usercart.length;
   this.datasource.saveCart(cart).subscribe( response =>{
    console.log(response);
    this.route.navigateByUrl("/usercart")
   })
  }
  userCart():Cart[]{
    this.totalprice=0;
    for (let index = 0; index < this.usercart.length; index++) {

      this.totalprice=this.totalprice + this.usercart[index].price
  }
  console.log(this.totalprice)
     return this.usercart
  }
  deleteCart(id:number){
        this.datasource.deleteCart(id).subscribe(s=>{
          console.log(s);
        })
  }
  getcourts(){
    this.selectdate=this.selectedDate.getDate().toString()
     this.datasource.getCourts(this.sportname,this.selectedDate.getDate.toString()).subscribe(data=>{
          this.Courts=[];
          console.log(this.Courts+"emptying in repo")
          this.Courts=data;
      })
  }
  displaycourts():Court[]{
    return this.Courts;
  }


  returnotp():number{
    console.log(this.otp+" return otp method")
    return this.otp;
  }
  sendbooking(Messageobj:Message){
    this.datasource.sendbooking(Messageobj).subscribe(data=>{
      console.log(data);
    })
  }

  saveuser(user:UserDetails){
    this.datasource.saveuser(user).subscribe(data=>
      this.userdetails=data

    )
  }

  savebookingdetails(bookingdetails:BookingDetails){
    bookingdetails.userId=this.userid;
     this.bookingarray.push(bookingdetails);
    // this.datasource.savebookingdetails(bookingdetails).subscribe(data=>{
    //   console.log(data)
    // })
  }

  booking(){

    this.usercart.forEach(data =>{
      this.bookingdetails.courtName = data.courtName;
      this.bookingdetails.sportName = this.sportname;
      this.bookingdetails.price = data.price;
      this.bookingdetails.Bookingdate = this.selectedDate.getDate.toString();
      this.bookingdetails.slotTime = this.slottime;
      this.bookingdetails.userId = this.userid;

      this.bookingarray.push(this.bookingdetails)
    })

    // this.datasource.savebooking(this.bookingarray).subscribe(data=>{
    //   console.log(data)
    // })
  }
  getsport(id:number){
    return this.datasource.getSportsById(id)
  }
  navigatetobooking(){
    this.route.navigate(['/Booking',this.courtrefid])
  }


}
