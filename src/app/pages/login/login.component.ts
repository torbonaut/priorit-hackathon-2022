import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { Subject, takeUntil } from 'rxjs';
import { AppHeaderTitleService } from 'src/app/app-header-title.service';
import { Auth } from 'src/app/core/auth/auth.actions';

@Component({
    selector: 'app-login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLoginComponent implements OnDestroy {
    private unsubscribe$: Subject<void> = new Subject();

    constructor(
        headerTitleService: AppHeaderTitleService,
        private readonly router: Router,
        private readonly store: Store,
        private readonly actions$: Actions
    ) {
        headerTitleService.set('Anmelden');

        this.actions$
            .pipe(
                ofActionSuccessful(Auth.Login),
                takeUntil(this.unsubscribe$)
            )
            .subscribe(() => { this.router.navigateByUrl('/member/dashboard'); });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    login() {
        this.store.dispatch(
            new Auth.Login({
                email: 'marion.musterfrau@membermembermember.com',
                password: '!test1234',
            })
        );
    }
}
