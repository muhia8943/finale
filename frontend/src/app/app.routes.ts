import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { JgiversComponent } from './jgivers/jgivers.component';

export const routes: Routes = [
    {path: '',component:LandingComponent},
    {path: 'landing', pathMatch: 'full', redirectTo:''},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path:  'users', component:UsersComponent},
    {path: 'admin', component:AdminComponent},
    {path: 'jgivers' ,component:JgiversComponent}
];
