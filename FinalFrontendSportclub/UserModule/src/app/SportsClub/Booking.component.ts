import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SportRepository } from '../Model/SportsRepository.component';
import { Cart } from '../Model/Cart.model';
import { Court } from '../Model/Court.model';
import { BookingDetails } from '../Model/Bookingdetails.model';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'Sport-Booking',
  templateUrl: './Booking.component.html',
  styleUrls:['./Booking.component.css']
})

export class BookingComponent  {
  public bookingdetails:BookingDetails =new BookingDetails();
  public savecart:Cart = new Cart(0,0);

  public court:Court = new Court(0,"","",0) ;
  public selecteddate:string="";
  public showslot:boolean=false;
  public showbutton:boolean=true;
  public showbutton1:boolean=false;
   // Delay of 2 seconds (2000 milliseconds)

   minDate=new Date();
  constructor(public repo:SportRepository,public router:ActivatedRoute,private route:Router,private dialog:MatDialog) {
     this.repo.showHeader=true;
     this.repo.courtrefid=router.snapshot.params["courtrefid"];
     this.court =  this.repo.getbookingdetails(router.snapshot.params["courtrefid"])
     this.selecteddate=this.repo.selectdate;
  }
  SaveBooking(form:NgForm){

  }


    get slotmethod(){
      console.log(this.repo.displayslot())
      console.log(this.repo.bookingdetails)
      return this.repo.displayslot()

    }


    saveCart(){
      const idString = localStorage.getItem('userid') ;
      const sid = idString !== null ? idString : "1";
      const id = parseInt(sid,0)
      console.log(id)
        if(id != 0){
      this.savecart.courtImageurl = this.court.courtImageUrl;
      this.savecart.courtName = this.court.courtName;
      this.savecart.sportName = this.repo.sportname;
      this.savecart.price = this.court.courtPrice;
      // this.savecart.Bookingdate = this.repo.selectedDate;
      this.savecart.slotTime = this.repo.slottime;
      this.savecart.userId = 1;
      this.repo.saveCart(this.savecart)

      Swal.fire("Good!", "Sport added to cart sucessfully!", "success")
        }
        else{
          Swal.fire({
            title: 'Please Login!',
            showDenyButton: true,
            confirmButtonText: 'Login',
            denyButtonText: `Cancel`,
          }).then((result) => {
            if (result.isConfirmed) {
              const dialogConfig = new MatDialogConfig();
              dialogConfig.width="550px";
              this.dialog.open(LoginComponent,dialogConfig);
            }
          })
        }
    }
    navigatetopayment(){
      if(this.repo.loginstatus){
          this.bookingdetails.courtName = this.court.courtName;
        this.bookingdetails.sportName = this.repo.sportname;
        this.bookingdetails.price = this.court.courtPrice;
        this.bookingdetails.Bookingdate = this.repo.selectedDate.getDate.toString();
        this.bookingdetails.slotTime = this.repo.slottime;
        this.bookingdetails.userId = 1;
        this.repo.savebookingdetails(this.bookingdetails)
        console.log("hello")
        this.route.navigate(['/Payment'])
    }
    else{


    Swal.fire({
      title: 'Please Login!',
      showDenyButton: true,
      confirmButtonText: 'Login',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width="550px";
        this.dialog.open(LoginComponent,dialogConfig);
      }
    })

    }
  }

}
