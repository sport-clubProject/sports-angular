import { Component, OnInit } from '@angular/core';
import { SportRepository } from '../Model/SportsRepository.component';

@Component({
  selector: 'selector-name',
  templateUrl: './aboutus.html'
})

export class AboutComponent implements OnInit {
  constructor(public repository:SportRepository) {
    repository.book = true;
  }

  ngOnInit() { }
}
