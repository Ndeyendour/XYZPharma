import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductModule } from './product/product.module';
import { HomeComponent } from './home/home.component';

import { PipeInvestPipe } from './pipe-invest.pipe';
import { AboutComponent } from './about/about.component';
import { InvestorsComponent } from './investors/investors.component';

import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    
    PageNotFoundComponent,
         HomeComponent,
        InvestorsComponent,
         PipeInvestPipe,
                  AboutComponent,
                
                  FooterComponent
        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
   
    ProductModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
