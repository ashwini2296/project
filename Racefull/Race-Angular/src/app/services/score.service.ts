import { Injectable } from '@angular/core';
import { GameScore } from '../class/gamescore';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ScoreService {

  

  private ScoreUrl = 'http://localhost:8080/api/race/GetScore';
  constructor( private http: HttpClient) { }

 
  addScore(score: GameScore): Observable<GameScore> {
    console.log(score, "This is a Score")
   return this.http.post<GameScore>(this.ScoreUrl, score, httpOptions);
 }

}
