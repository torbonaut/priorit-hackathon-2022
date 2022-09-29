import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const WELCOME_ROUTES: Routes = [
  { path: '', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(WELCOME_ROUTES)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
