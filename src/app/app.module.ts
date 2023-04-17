import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
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
;
import { DataServiceService } from './data-service.service';
const routes: Routes = [
  
  { path: '', component: AccueilComponent },
  { path: 'about', component: AboutComponent },
  { path: 'devenez-chauffeur', component: DevenezChauffeurComponent },
  { path: 'nos-services', component: NosServicesComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DataServiceService]
 
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
