import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SportRepository } from '../Model/SportsRepository.component';
import { UserDetails } from '../Model/User.model';

@Component({
  selector: 'Sport-Register',
  templateUrl: 'Signup.component.html',
  styleUrls:['./Signup.component.css']
})

export class RegisterComponent {


public login=new UserDetails();
  constructor(private formBuilder: FormBuilder,private repo:SportRepository) {
    this.repo.showHeader=false
  }
  onSubmit(){
    console.log(this.login)
    this.repo.saveuser(this.login)
  }

}
