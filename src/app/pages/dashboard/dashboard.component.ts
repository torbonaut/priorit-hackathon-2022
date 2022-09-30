import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppHeaderTitleService } from 'src/app/app-header-title.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  subscription: Subscription = new Subscription();

  constructor(private readonly headerTitleService: AppHeaderTitleService) {
    this.headerTitleService.set('Dashboard');
  }

}
