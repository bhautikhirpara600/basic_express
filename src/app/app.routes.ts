import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { ContactUs } from './contact-us/contact-us';
import { Login } from './login/login';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "about", component: About},
    {path: "contact", component: ContactUs},
    {path: "login", component: Login}
];
