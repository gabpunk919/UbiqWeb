import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { DevenezChauffeurComponent } from './devenez-chauffeur/devenez-chauffeur.component';
import { NosServicesComponent } from './nos-services/nos-services.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { DataServiceService } from './data-service.service';
import { TopBanner2Component } from './top-banner2/top-banner2.component';
import { FormsModule,ReactiveFormsModule,Validators  } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { userConnected } from 'src/DataSource/UserConnected';
import { MatDatepickerModule } from '@angular/material/datepicker';
const routes: Routes = [
  
  { path: '', component: LandingPageComponent },
  { path: 'magasiner', component: AccueilComponent },
  { path: 'about', component: AboutComponent },
  { path: 'devenez-partenaire', component: DevenezChauffeurComponent },
  { path: 'nos-services', component: NosServicesComponent },
  { path: 'réservation/:id', component: ReservationComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DataServiceService,NgbCarouselConfig,userConnected],
  declarations: [
  ]
 
})
export class AppRoutingModule { }

@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    AccueilComponent,
    AboutComponent,
    DevenezChauffeurComponent,
    NosServicesComponent,
    FooterComponent,
    ReservationComponent,
    TopBanner2Component,
    LandingPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    NgbCarouselModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule
  ],
  providers: [DataServiceService,userConnected],
  bootstrap: [AppComponent]
})
export class AppModule { }
