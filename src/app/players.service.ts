import { Injectable } from '@angular/core';
import { Player } from './player'
import { PLAYERS } from './players'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  getPlayers(): Observable<Player[]>{
    return of(PLAYERS);
  }


}
