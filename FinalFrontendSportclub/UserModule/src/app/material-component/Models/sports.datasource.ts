// import { Sport } from './../../Model/Sport.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stadiums } from './Stadiums.models';
import { Sport } from './Sport.model';
import { Courts } from './Courts.model';


@Injectable()
export class SportsDataSource {
  constructor(private http:HttpClient) { }


  //get  stadiums
  getStadiums():Observable<Stadiums[]>{
  return this.http.get<Stadiums[]>(`http://localhost:5128/api/Stadium/getallstadiums`);
  }

  //save stadiums
  saveStadiums(){

  }


  //getsportbystadiumId
  getSportByStadiumId(stadiumId:number):Observable<Sport[]>{
   return this.http.get<Sport[]>(`http://localhost:5128/api/Sports/getsportbystadiumid?stadiumId=${stadiumId}`)
  }



  //get court by sport id
  getCourtBySportId(sportId:number):Observable<Courts[]>{
  return this.http.get<Courts[]>(`http://localhost:5128/api/Courts/getcourtbysportid?sportId=${sportId}`)
  }


  //save or add stadium
  saveStadium(stadium:Stadiums):Observable<Stadiums[]>{

   return this.http.post<Stadiums[]>(`http://localhost:5128/api/Stadium/savestadium`,stadium)
  }


  //save sport by stadium id
  saveSportByStadiumId(stadiumId: number, sport: Sport): Observable<any> {
    return this.http.post<any>(`http://localhost:5128/api/Sports/savesportbystadiumid?stadiumId=${stadiumId}`, sport);
  }

  //save court by sport id
    saveCourtBySportId(sportId:number,court:Courts):Observable<any>{
      return this.http.post<any>(`http://localhost:5128/api/Courts/savecourtbysportid?sportId=${sportId}`,court);




    }

    //delete stadium
    deleteStadium(stadiumId:number): Observable<any> {
   return this.http.delete(`http://localhost:5128/api/Stadium/deletestadium?stadiumId=${stadiumId}`);
    }

    //delete sport
    deleteSport(sportId:number):Observable<any>{
   return this.http.delete(`http://localhost:5128/api/Sports/deletespost?id=${sportId}`);
    }

    //delete court
    deleteCourt(courtId:number):Observable<any>{
       return this.http.delete(`http://localhost:5128/api/Courts/deletecourt?id=${courtId}`);
    }
}
