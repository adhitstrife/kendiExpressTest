import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HeroComponent } from './hero/hero.component';
import { FeatureComponent } from './feature/feature.component';
import { MenuComponent } from './menu/menu.component';
import { PartnersComponent } from './partners/partners.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { BottomactionComponent } from './bottomaction/bottomaction.component';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    NavbarComponent,
    SearchbarComponent,
    HeroComponent,
    FeatureComponent,
    MenuComponent,
    PartnersComponent,
    HowitworksComponent,
    TestimonyComponent,
    BottomactionComponent
  ],
  imports: [
    HttpClientModule,
    SlickCarouselModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
