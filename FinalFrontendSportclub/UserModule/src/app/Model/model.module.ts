import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { SportRepository } from './SportsRepository.component';
import { SportDataSource } from './RestDatasource.component';

@NgModule({
  imports: [HttpClientModule],
  providers: [SportDataSource,SportRepository],
})
export class ModelModule { }
