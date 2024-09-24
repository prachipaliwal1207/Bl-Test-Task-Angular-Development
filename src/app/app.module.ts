import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CovidStatComponent } from './component/covid-stat/covid-stat.component';
import { CovidLocationWiseDataComponent } from './component/covid-location-wise-data/covid-location-wise-data.component';
import { HttpClientModule } from '@angular/common/http';
import { Covid19GraphsComponent } from './component/covid19-graphs/covid19-graphs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    DashboardComponent,
    CovidStatComponent,
    CovidLocationWiseDataComponent,
    Covid19GraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
