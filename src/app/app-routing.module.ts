import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RosterComponent } from './roster/roster.component';
import { DraftComponent } from './draft/draft.component';

const routes: Routes = [
  { path: 'roster', component: RosterComponent },
  { path: 'draft', component: DraftComponent },
  { path: '', redirectTo: '/draft', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})


export class AppRoutingModule { }
