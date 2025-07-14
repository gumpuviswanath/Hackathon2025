import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { HeroComponent } from './home/components/hero/hero.component';
import { FeaturesComponent } from './home/components/features/features.component';
import { EligibilityComponent } from './home/components/eligibility/eligibility.component';
import { BenefitsComponent } from './home/components/benefits/benefits.component';
import { FooterComponent } from './home/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    EligibilityComponent,
    BenefitsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
