import { Component, OnInit } from '@angular/core';
import { SportRepository } from '../Model/SportsRepository.component';

@Component({
  selector: 'selector-name',
  templateUrl: './contact.html'
})

export class ContactComponent implements OnInit {
  constructor(public repo : SportRepository) {
    repo.book=true;
  }

  ngOnInit() { }
}
