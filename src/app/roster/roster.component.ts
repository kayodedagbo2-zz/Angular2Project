import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { RostersService } from '../rosters.service'
import { PlayersService } from '../players.service'
import { Player } from '../player';


@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  players:Player[];
 
  constructor(private playerService: PlayersService) { }

  ngOnInit() {
     this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players)
  }


}
