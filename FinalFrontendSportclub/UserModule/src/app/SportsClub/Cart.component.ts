import { Component, OnDestroy, OnInit } from '@angular/core';
import { SportRepository } from '../Model/SportsRepository.component';
import { Cart } from '../Model/Cart.model';
import { Router } from '@angular/router';
import { SportDataSource } from '../Model/RestDatasource.component';
import { AppServiceService } from '../Model/app-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'selector-name',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})

export class CartComponent implements OnDestroy {
  totalprice:number=0;
  public usercart:Cart[]=[];
  constructor(public appService:AppServiceService,public repository:SportRepository,private route:Router,public datasource:SportDataSource) {
    const idString = localStorage.getItem('userid') ?? "";
    // const sid = idString !== null ? idString : "1";
    const id = parseInt(idString)
    console.log(id);
    datasource.userCart(id).subscribe(cart=>{
      this.usercart = cart;
      repository.cartsize = cart.length
     })
  }


get userCart():Cart[]{
  console.log(this.repository.userCart())
      //  this.repository.cartsize = this.repository.userCart().length;
    return this.usercart;

}
savebooking(){
  this.repository.totalprice=this.totalprice;
  this.route.navigate(['/Payment'])
}
deletesport(id:number){
  Swal.fire({
    title: 'Are you sure do you want to remove from cart!',
    showDenyButton: true,
    confirmButtonText: 'Ok',
    denyButtonText: `Cancel`,
  }).then((result) => {
    if (result.isConfirmed) {
      const cartrefid:number= this.usercart.findIndex(e=>e.cartId==id)
      this.userCart.splice(cartrefid,1)
      this.repository.cartsize = this.userCart.length;
      this.repository.deleteCart(id);
    }
  })

}

ngOnDestroy(): void {
  return this.repository.unsubscribeCart();
}
}
