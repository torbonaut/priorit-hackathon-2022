import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

const TITLE_PREFIX = 'priorIT SomeApp - ';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/member/dashboard',
    },
    {
        path: 'member',
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./pages/welcome/welcome.module').then(
                        (m) => m.WelcomeModule
                    ),
                title: TITLE_PREFIX + 'Dashboard',
            },
            {
                path: 'profile',
                loadChildren: () =>
                    import('./pages/profile/profile.module').then(
                        (m) => m.ProfileModule
                    ),
                title: TITLE_PREFIX + 'Profil',
            },
            {
                path: 'dummy',
                loadChildren: () =>
                    import('./pages/dummy/dummy.module').then(
                        (m) => m.DummyModule
                    ),
                title: TITLE_PREFIX + 'Dummy',
            }
        ],
    },

    {
        path: 'login',
        loadChildren: () =>
            import('./pages/login/login.module').then((m) => m.LoginModule),
        title: TITLE_PREFIX + 'Anmelden',
    },
];
