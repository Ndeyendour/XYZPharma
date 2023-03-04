import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InvestorsComponent } from './investors/investors.component';




import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'investor',component:InvestorsComponent},
 
  { path:'footer',component:FooterComponent},
  { path:'about',component:AboutComponent},
  { path: '',redirectTo:'', pathMatch:'full'},

  { path: '**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
