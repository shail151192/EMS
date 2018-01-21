import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {AppRoutesModule} from './app.routes';
import { EventsModule} from './events/events.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    EventsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [EventsModule]
})
export class AppModule { }
