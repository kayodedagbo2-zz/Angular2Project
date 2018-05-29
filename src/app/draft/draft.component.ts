import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Team } from '../team';
import { PlayersService } from '../players.service'
import { RostersService } from '../rosters.service'

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {
  players:Player[];
  teams:Team[];

  constructor(private playerService: PlayersService,private rostersService: RostersService) { }

  ngOnInit() {
    this.getPlayers();
    this.getTeams();
  }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players)
  }

  getTeams(): void {
    this.rostersService.getTeams().subscribe(teams => this.teams = teams)
  }

  filterWithTeams(players){
    return players.filter(x => x.team == null);
  }


  onEdit(player): void {
    player.editing=!player.editing;
  }

}
