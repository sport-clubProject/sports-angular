import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../model/User.model';
import { AdminRepository } from '../model/adminrepository.component';
import { Message } from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import { AdminDatasource } from '../model/restdatasource.component';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent implements OnInit {
  userdetails:UserDetails[] =[];
  public message:Message[]=[];
  search:string = "";
  constructor(private repo:AdminRepository,public datasource:AdminDatasource) {
    // this.userdetails=repo.userdetails;
    datasource.getuserdetails().subscribe(data=>{
      this.userdetails=data;
   })
    console.log(this.userdetails)
   }

   get details():UserDetails[]{
    return this.userdetails.filter( d => d.userName?.toLowerCase().match(this.search.toLowerCase()))
   }

  ngOnInit(): void {
      this.message=[
        {severity:'success',detail:'Role Changed Successfully'}
      ]
  }
  onToggleChange(user:UserDetails): void {
    if (user.isToggleOn) {
      var rolee: string = 'admin';
      const index=this.userdetails.findIndex(e => e.userId === user.userId);
      this.userdetails[index].role=rolee;
      this.userdetails[index]

    }
    else {
      var rolee: string = 'user';
      const index=this.userdetails.findIndex(e => e.userId === user.userId);
      this.userdetails[index].role=rolee;
      console.log("off" + user.userId);
    }


  }


}


