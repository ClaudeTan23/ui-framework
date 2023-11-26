import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegisterConfirmationComponent } from './register-confirmation/register-confirmation.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetSuccessComponent } from './reset-success/reset-success.component';
import { CommunityComponent } from './community/community.component';
import { ProfileComponent } from './profile/profile.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { ListSearchComponent } from './list-search/list-search.component';
import { ListUserComponent } from './list-user/list-user.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Welcome',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'register',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'login',
  },
  {
    path: 'register-confirmation',
    component: RegisterConfirmationComponent,
    title: 'register confirmation',
  },
  {
    path: 'register-success',
    component: RegisterSuccessComponent,
    title: 'register success',
  },
  {
    path: 'forget',
    component: ForgetPasswordComponent,
    title: 'Forget Password',
  },
  {
    path: 'reset',
    component: ResetPasswordComponent,
    title: 'Reset Password',
  },
  {
    path: 'reset-success',
    component: ResetSuccessComponent,
    title: 'reset success',
  },
  {
    path: 'home',
    component: CommunityComponent,
    title: 'home',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'profile',
  },
  {
    path: 'profile/:id',
    component: PublicProfileComponent,
    title: 'user',
  },
  {
    path: 'user/:name',
    component: ListUserComponent,
    title: 'users',
  },
  {
    path: '**',
    redirectTo: '',
    title: 'welcome',
  },
];
