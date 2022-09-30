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
                    import('./pages/dashboard/dashboard.module').then(
                        (m) => m.DashboardModule
                    ),
                title: TITLE_PREFIX + 'Dashboard',
            },
            {
                path: 'add-appointment',
                loadChildren: () =>
                    import('./pages/add-appointment/add-appointment.module').then(
                        (m) => m.AddAppointmentModule
                    ),
                title: TITLE_PREFIX + 'Neue Aktivität erstellen',
            },
            {
                path: 'picture-it',
                loadChildren: () =>
                    import('./pages/picture-it/picture-it.module').then(
                        (m) => m.PictureItModule
                    ),
                title: TITLE_PREFIX + 'Bilderrätsel',
            }, 
            {
                path: 'picture-tip',
                loadChildren: () =>
                    import('./pages/picture-tip/picture-tip.module').then(
                        (m) => m.PictureTipModule
                    ),
                title: TITLE_PREFIX + 'Bilderrätsel Tipp',
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
