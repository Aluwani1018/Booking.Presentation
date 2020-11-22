import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { LoginFormComponent } from './account/login-form/login-form.component';
import { RegistrationFormComponent } from './account/registration-form/registration-form.component';
import { AuthGuard } from './auth.guard';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    { path: 'register', component: RegistrationFormComponent },
    { path: 'login', component: LoginFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{useHash: true, onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})

export class AppRoutingModule{}