import { Injectable } from '@angular/core';
import { Team } from './team'
import { TEAMS } from './teams'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RostersService {

  constructor() { }

  getTeams(): Observable<Team[]>{
    return of(TEAMS);
  }
}
