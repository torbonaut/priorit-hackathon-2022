import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import {
    UserOutline,
    UsergroupAddOutline,
} from '@ant-design/icons-angular/icons';
import { NzButtonModule } from 'ng-zorro-antd/button';

const icons: IconDefinition[] = [UserOutline, UsergroupAddOutline];


@NgModule({
    imports: [DashboardRoutingModule, NzIconModule.forChild(icons), NzButtonModule],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
})
export class DashboardModule {}
