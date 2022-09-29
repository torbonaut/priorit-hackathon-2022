import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AppHeaderTitleService } from './app-header-title.service';
import { Auth } from './core/auth/auth.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy {
    isCollapsed = false;
    headerTitle$: Observable<string>;
    private unsubscribe$: Subject<void> = new Subject();

    constructor(
        headerTitleService: AppHeaderTitleService,
        private readonly router: Router,
        private readonly msg: NzMessageService,
        private readonly store: Store,
        private readonly actions$: Actions
    ) {
        this.headerTitle$ = headerTitleService.get();

        this.actions$.pipe(
            ofActionSuccessful(Auth.Logout),
            takeUntil(this.unsubscribe$)
        ).subscribe(() => {
            this.navigate('/login');
            this.msg.info('Sie wurden abgemeldet.');
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    navigate(path: string) {
        this.isCollapsed = true;
        this.router.navigateByUrl(path);
    }

    logout() {
        this.store.dispatch(new Auth.Logout());
    }
}
