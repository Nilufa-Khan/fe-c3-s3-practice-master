import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';

import { IconComponent } from './icon/icon.component';
import { SearchComponent } from './search/search.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { SlidebarComponent } from './slidebar/slidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactContainerComponent,
    IconComponent,
    SearchComponent,
    ContactCardComponent,
    SlidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
