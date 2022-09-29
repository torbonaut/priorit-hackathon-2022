import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppHeaderTitleService } from 'src/app/app-header-title.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  subscription: Subscription = new Subscription();

  constructor(private readonly headerTitleService: AppHeaderTitleService) {
    this.headerTitleService.set('Willkommen');
  }

}
