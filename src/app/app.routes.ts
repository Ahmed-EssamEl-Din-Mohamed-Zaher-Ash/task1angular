import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
export const routes: Routes = [
   {path: '', redirectTo: 'home', pathMatch: 'full'},
   { path: "home", component: HomeComponent },
   { path: "contact", component: ContactComponent },
   { path: "portfolio", component: PortfolioComponent,},
   { path: "about", component: AboutComponent },
   {path: '**', component:NotFoundComponent}
];
