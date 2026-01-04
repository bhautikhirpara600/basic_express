import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { ContactUs } from './contact-us/contact-us';
import { Login } from './login/login';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';
import { User } from './user/user';
import { Signup } from './signup/signup';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "about", component: About},
    {path: "contact", component: ContactUs},
    {path: "login", component: Login},
    {path: "profile", component: Profile},
    {path: "user/:id/:name", component: User},
    {path: "signup", component: Signup},
    {path: "**", component: PageNotFound}
];
