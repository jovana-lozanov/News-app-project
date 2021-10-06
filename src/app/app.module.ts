import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { NewsContentItemComponent } from './news-content/news-content-item/news-content-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsContentComponent,
    NewsContentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
