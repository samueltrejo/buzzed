import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { CreategroupComponent } from './components/creategroup/creategroup.component';
import { JoingroupComponent } from './components/joingroup/joingroup.component';

const routes: Routes = [
  { path: 'join', component: JoingroupComponent },
  { path: 'create', component: CreategroupComponent },
  { path: '', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
